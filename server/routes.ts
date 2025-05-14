import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  app.post('/api/waitlist', async (req: Request, res: Response) => {
    try {
      // Validate request body against schema
      const waitlistData = insertWaitlistSchema.parse(req.body);
      
      // Check if email already exists in waitlist
      const existingEntry = await storage.getWaitlistEntryByEmail(waitlistData.email);
      
      if (existingEntry) {
        return res.status(409).json({ 
          message: "This email is already on our waitlist." 
        });
      }
      
      // Create new waitlist entry
      const newEntry = await storage.createWaitlistEntry(waitlistData);
      
      return res.status(201).json({
        message: "Successfully added to waitlist",
        entry: newEntry
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Invalid data provided", 
          errors: validationError.details 
        });
      }
      
      return res.status(500).json({ 
        message: "An error occurred while processing your request" 
      });
    }
  });

  app.get('/api/waitlist', async (req: Request, res: Response) => {
    try {
      const entries = await storage.getWaitlistEntries();
      return res.status(200).json(entries);
    } catch (error) {
      return res.status(500).json({ 
        message: "An error occurred while retrieving waitlist entries" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
