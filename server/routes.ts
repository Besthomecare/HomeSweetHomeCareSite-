import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactFormSchema, type InsertContactForm } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate form data
      const validatedData = insertContactFormSchema.parse(req.body);
      
      // Store form data
      const contactForm = await storage.createContactForm(validatedData);
      
      // Send response
      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        data: contactForm
      });
    } catch (error) {
      if (error.name === "ZodError") {
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
