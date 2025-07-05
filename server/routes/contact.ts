import { RequestHandler } from "express";
import * as nodemailer from "nodemailer";

export const handleContact: RequestHandler = async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  // Temporarily hardcode credentials for testing
  const gmailUser = "prakuljn3105@gmail.com";
  const gmailPassword = "ozcd zytb pixi nyvs";

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
      error: `Failed to send email: ${error.message}` 
    });
  }
}; 