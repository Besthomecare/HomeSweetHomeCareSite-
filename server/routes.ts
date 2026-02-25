import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactFormSchema, type InsertContactForm } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { ZodError } from "zod";
import { getUncachableResendClient } from "./resend-client";
import { getChatResponse } from "./chatbot";
import path from "path";

const chatRateLimit = new Map<string, number[]>();
const CHAT_RATE_LIMIT = 20;
const CHAT_RATE_WINDOW = 60 * 1000;

setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of chatRateLimit) {
    const recent = timestamps.filter((t) => now - t < CHAT_RATE_WINDOW);
    if (recent.length === 0) {
      chatRateLimit.delete(ip);
    } else {
      chatRateLimit.set(ip, recent);
    }
  }
}, 5 * 60 * 1000);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = chatRateLimit.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < CHAT_RATE_WINDOW);
  chatRateLimit.set(ip, recent);
  if (recent.length >= CHAT_RATE_LIMIT) return true;
  recent.push(now);
  return false;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    console.log("Contact form submission received", { formData: req.body, env: process.env.NODE_ENV });
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
            } else if (recaptchaData.score < 0.5) {
              // Block scores below Google's recommended threshold
              console.error("Blocking low reCAPTCHA score:", recaptchaData.score);
              return res.status(400).json({
                success: false,
                message: "Security verification failed. Please try again or call us at (941) 200-0848.",
              });
            }
          } catch (recaptchaError) {
            console.error("reCAPTCHA verification error:", recaptchaError);
            // Don't block submission on error - allow form to work
          }
        }
      }

      // Validate form data
      console.log("Step 1: Validating form data...");
      const validatedData = insertContactFormSchema.parse(formData);
      console.log("Step 1 complete: Validation successful");
      
      // Store form data
      console.log("Step 2: Storing form data in database...");
      const contactForm = await storage.createContactForm(validatedData);
      console.log("Step 2 complete: Data stored, ID:", contactForm.id);

      // Send notification email to business
      console.log("Step 3: Preparing to send emails...");
      try {
        console.log("Step 3a: Getting Resend client...");
        const { client, fromEmail } = await getUncachableResendClient();
        console.log("Step 3a complete: Resend client ready, from:", fromEmail);
        
        console.log("Step 3b: Sending business notification email...");
        const businessEmailResult = await client.emails.send({
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
        console.log("Step 3b complete: Business email sent, result:", businessEmailResult);

        // Send auto-reply to customer
        console.log("Step 3c: Sending customer auto-reply...");
        const customerEmailResult = await client.emails.send({
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
        console.log("Step 3c complete: Customer email sent, result:", customerEmailResult);
      } catch (emailError) {
        console.error("Error sending emails:", emailError);
        console.error("Email error details:", JSON.stringify(emailError, null, 2));
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
        console.error("Error stack:", error instanceof Error ? error.stack : 'No stack trace');
        const errorMessage = error instanceof Error ? error.message : "An error occurred while processing your request";
        res.status(500).json({ 
          success: false, 
          message: errorMessage,
          errorType: error instanceof Error ? error.constructor.name : typeof error
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

  app.post("/api/chat", async (req: Request, res: Response) => {
    try {
      const clientIp = req.ip || req.socket.remoteAddress || "unknown";
      if (isRateLimited(clientIp)) {
        return res.status(429).json({
          success: false,
          message: "Too many messages. Please wait a moment or call us at (941) 200-0848.",
        });
      }

      const { messages } = req.body;

      if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Messages array is required",
        });
      }

      if (messages.length > 50) {
        return res.status(400).json({
          success: false,
          message: "Conversation too long. Please start a new chat.",
        });
      }

      const validMessages = messages
        .filter(
          (m: any) =>
            (m.role === "user" || m.role === "assistant") &&
            typeof m.content === "string" &&
            m.content.trim().length > 0
        )
        .map((m: any) => ({
          role: m.role as "user" | "assistant",
          content: m.content.trim().slice(0, 1000),
        }));

      if (validMessages.length === 0) {
        return res.status(400).json({
          success: false,
          message: "No valid messages provided",
        });
      }

      const reply = await getChatResponse(validMessages);

      res.status(200).json({
        success: true,
        message: reply,
      });
    } catch (error) {
      console.error("Error in chat endpoint:", error);
      res.status(500).json({
        success: false,
        message: "Something went wrong. Please call us at (941) 200-0848 for assistance.",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
