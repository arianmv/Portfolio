import { Request, Response } from "express";
import { contactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function handleContact(req: Request, res: Response) {
  try {
    // Validate the incoming request data
    const validatedData = contactMessageSchema.safeParse(req.body);
    
    if (!validatedData.success) {
      const errorMessage = fromZodError(validatedData.error).message;
      return res.status(400).json({ 
        success: false, 
        message: `Invalid form data: ${errorMessage}` 
      });
    }
    
    const { name, email, message } = validatedData.data;
    
    // In a real implementation, we would use something like Nodemailer
    // to send an actual email. For now, we'll just log the message
    // and return a success response.
    console.log("Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });
    
    return res.status(200).json({ 
      success: true, 
      message: "Message received successfully" 
    });
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Server error processing your request" 
    });
  }
}
