import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimitContact, validateContactInput } from '@/lib/security/contactValidation';

export async function POST(request) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               '127.0.0.1';
    
    // Rate limiting
    if (!rateLimitContact(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    const { name, email, subject, message } = await request.json();

    // Validate and sanitize input
    try {
      validateContactInput({ name, email, message });
    } catch (validationError) {
      return NextResponse.json(
        { error: validationError.message },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = name.trim().substring(0, 100);
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedSubject = subject ? subject.trim().substring(0, 200) : 'Contact Form Submission';
    const sanitizedMessage = message.trim().substring(0, 2000);

    // Create transporter using Gmail (you can change this to your preferred email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Email to you (the site owner)
    const ownerEmailOptions = {
      from: process.env.EMAIL_USER,
      to: 'anasnajam14@gmail.com', // Your email where you want to receive messages
      subject: `New Contact Form Submission: ${sanitizedSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: #374151;">Contact Information</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${sanitizedName}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${sanitizedEmail}</p>
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${sanitizedSubject}</p>
            <p style="margin: 5px 0;"><strong>IP Address:</strong> ${ip}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin: 0 0 15px 0; color: #374151;">Message</h3>
            <p style="line-height: 1.6; color: #4b5563; white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #1e40af;">
              <strong>Next Steps:</strong> Reply directly to this email or call them at the number they provided (if any).
            </p>
          </div>
        </div>
      `,
    };

    // Confirmation email to the user
    const userEmailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Looking Ahead - We\'ve received your message!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">Thank you for reaching out!</h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">Dear ${name},</p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Thank you for contacting Looking Ahead. We've received your message and will get back to you within 24 hours.
          </p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 15px 0; color: #374151;">Your Message Summary</h3>
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
            <p style="margin: 5px 0;"><strong>Your Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 6px; line-height: 1.6; color: #4b5563; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: #1e40af;">What happens next?</h3>
            <ul style="margin: 0; padding-left: 20px; color: #374151;">
              <li style="margin-bottom: 8px;">We'll review your inquiry carefully</li>
              <li style="margin-bottom: 8px;">A member of our team will respond within 24 hours</li>
              <li style="margin-bottom: 8px;">If you need immediate assistance, call us at 07889393700</li>
            </ul>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
            <p style="font-size: 14px; color: #6b7280; margin: 0;">
              <strong>Looking Ahead</strong><br>
              ADHD Awareness & Support Training<br>
              Email: siddiqia@gmail.com<br>
              Phone: 07889393700<br>
              Location: Leicester, UK
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(ownerEmailOptions);
    await transporter.sendMail(userEmailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
