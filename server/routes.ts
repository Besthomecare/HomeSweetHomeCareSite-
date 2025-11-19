import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactFormSchema, type InsertContactForm } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { ZodError } from "zod";
import { getUncachableResendClient } from "./resend-client";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { recaptchaToken, ...formData } = req.body;

      // Verify reCAPTCHA (optional - gracefully degrade if it fails)
      if (recaptchaToken) {
        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
        if (recaptchaSecret) {
          try {
            const recaptchaResponse = await fetch(
              `https://www.google.com/recaptcha/api/siteverify`,
              {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
              }
            );

            const recaptchaData = await recaptchaResponse.json();
            
            if (!recaptchaData.success) {
              console.warn("reCAPTCHA verification failed:", recaptchaData);
              // Don't block submission - just log it for monitoring
            } else if (recaptchaData.score < 0.3) {
              // Only block very low scores (likely bots)
              console.error("Blocking low reCAPTCHA score:", recaptchaData.score);
              return res.status(400).json({
                success: false,
                message: "reCAPTCHA verification failed. Please try again.",
              });
            }
          } catch (recaptchaError) {
            console.error("reCAPTCHA verification error:", recaptchaError);
            // Don't block submission on error - allow form to work
          }
        }
      }

      // Validate form data
      const validatedData = insertContactFormSchema.parse(formData);
      
      // Store form data
      const contactForm = await storage.createContactForm(validatedData);

      // Send notification email to business
      try {
        const { client, fromEmail } = await getUncachableResendClient();
        
        await client.emails.send({
          from: fromEmail,
          to: "info@besthomecare.net",
          subject: "New Care Assessment Request",
          html: `
            <h2>New Care Assessment Request</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone}</p>
            <p><strong>Zip Code:</strong> ${validatedData.zipCode}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          `,
        });

        // Send auto-reply to customer
        await client.emails.send({
          from: fromEmail,
          to: validatedData.email,
          subject: "Thank You for Contacting Home Sweet Home Care",
          html: `
            <h2>Thank You for Your Inquiry</h2>
            <p>Dear ${validatedData.name},</p>
            <p>Thank you for reaching out to Home Sweet Home Care. We have received your request for a free care assessment.</p>
            <p>A member of our team will contact you within 24 hours to discuss your needs and answer any questions you may have.</p>
            <p>In the meantime, if you have any urgent questions, please feel free to call us at <strong>(941) 200-0848</strong>.</p>
            <br>
            <p>Best regards,<br>Home Sweet Home Care Team</p>
          `,
        });
      } catch (emailError) {
        console.error("Error sending emails:", emailError);
      }
      
      // Send response
      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        data: contactForm
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your request" 
        });
      }
    }
  });

  // Get all contact form submissions - would be protected in a real app
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const forms = await storage.getAllContactForms();
      res.status(200).json({ forms });
    } catch (error) {
      console.error("Error fetching contact forms:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching contact forms" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
