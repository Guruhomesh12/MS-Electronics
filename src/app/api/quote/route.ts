import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // We expect SMTP credentials to be defined in .env.local
    // For now we'll just log and return success if they are missing
    // so the frontend works without crashing before user provides them
    
    if (!process.env.SMTP_HOST) {
      console.log('Quote Request received (SMTP not configured):', data);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      return NextResponse.json({ success: true, message: 'Simulated success' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || 'quotes@mselectronics.com',
      to: process.env.BUSINESS_EMAIL || process.env.SMTP_USER,
      subject: `New Quote Request from ${data.companyName}`,
      html: `
        <h2>New Custom Touch Panel Quote Request</h2>
        <h3>Contact Information</h3>
        <ul>
          <li><strong>Company:</strong> ${data.companyName}</li>
          <li><strong>Contact:</strong> ${data.contactPerson}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone}</li>
          <li><strong>Country:</strong> ${data.country}</li>
        </ul>
        
        <h3>Hardware Specifications</h3>
        <ul>
          <li><strong>Dimensions:</strong> ${data.config.width}" x ${data.config.height}"</li>
          <li><strong>Corner Radius:</strong> ${data.config.radius}"</li>
          <li><strong>Orientation:</strong> ${data.config.orientation}</li>
        </ul>
        
        <h3>Project Details</h3>
        <ul>
          <li><strong>Quantity:</strong> ${data.quantity}</li>
          <li><strong>Mounting:</strong> ${data.mountingType}</li>
          <li><strong>Environment:</strong> ${data.environment}</li>
          <li><strong>Glass Finish:</strong> ${data.glassFinish}</li>
        </ul>
        
        <h3>Description</h3>
        <p>${data.projectDescription}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Auto-responder to customer
    const autoResponderOptions = {
      from: process.env.SMTP_FROM_EMAIL || 'quotes@mselectronics.com',
      to: data.email,
      subject: `Quote Request Received - MS Electronics`,
      html: `
        <p>Dear ${data.contactPerson},</p>
        <p>Thank you for requesting a quotation for custom touch panels.</p>
        <p>Our engineering team has received your hardware specifications and will review them shortly. We typically respond within 24 hours.</p>
        <p>Best regards,<br/>MS Electronics Engineering Team</p>
      `,
    };
    
    try {
      await transporter.sendMail(autoResponderOptions);
    } catch (e) {
      console.warn("Failed to send auto-responder, but main email sent.", e);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending quote email:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
