import { RequestHandler } from "express";
import * as nodemailer from "nodemailer";

export const handleContact: RequestHandler = async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  // Get credentials from environment variables
  const gmailUser = process.env.GMAIL_USER || "prakuljn3105@gmail.com";
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  // Debug: Log environment variables (password masked)
  console.log('Environment check:');
  console.log('GMAIL_USER:', gmailUser);
  console.log('GMAIL_APP_PASSWORD exists:', !!gmailPassword);
  console.log('GMAIL_APP_PASSWORD length:', gmailPassword ? gmailPassword.length : 0);

  // Check if app password is configured
  if (!gmailPassword) {
    console.error('Gmail App Password not configured in environment variables');
    return res.status(500).json({ 
      success: false, 
      error: "Email service not configured. Please contact directly via prakuljn3105@gmail.com"
    });
  }

  try {
    console.log('Attempting to send email...');
    console.log('Gmail User:', gmailUser);

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword
      }
    });

    // Verify transporter configuration
    await transporter.verify();
    console.log('Transporter verified successfully');

    // Email content
    const mailOptions = {
      from: gmailUser,
      to: gmailUser, // Send to yourself
      replyTo: email, // Allow replying to the sender
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ 
      success: false, 
      error: `Failed to send email. Please try contacting directly at prakuljn3105@gmail.com` 
    });
  }
}; 