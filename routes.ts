import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEntrySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistEntrySchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Successfully joined the waitlist!",
        data: {
          id: entry.id,
          fullName: entry.fullName,
          email: entry.email,
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }
      
      if (error instanceof Error && error.message === "Email already registered on waitlist") {
        return res.status(409).json({
          success: false,
          message: "This email is already on our waitlist!",
        });
      }
      
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  // Get waitlist stats
  app.get("/api/waitlist/stats", async (req, res) => {
    try {
      const count = await storage.getWaitlistCount();
      res.json({
        success: true,
        data: {
          count,
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
