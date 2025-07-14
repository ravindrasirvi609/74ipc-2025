"use strict";

import { Resend } from "resend";
import type { IRegistration } from "@/models/Registration";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

async function sendRegistrationConfirmationEmail(
  registration: IRegistration
): Promise<EmailResult> {
  try {
    const { data, error } = await resend.emails.send({
      from: "APTI Conference <noreply@74ipc2025.com>",
      to: [registration.email],
      subject: "74th IPC 2025 - Registration Confirmation",
      html: createRegistrationConfirmationHTML(registration),
    });

    if (error) {
      console.error("Email sending error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, messageId: data?.id };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

async function sendPaymentFailureEmail(
  registration: IRegistration,
  failureReason: string
): Promise<EmailResult> {
  try {
    const { data, error } = await resend.emails.send({
      from: "APTI Conference <noreply@74ipc2025.com>",
      to: [registration.email],
      subject: "74th IPC 2025 - Payment Failed",
      html: createPaymentFailureHTML(registration, failureReason),
    });

    if (error) {
      console.error("Payment failure email error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, messageId: data?.id };
  } catch (error) {
    console.error("Payment failure email error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

function createRegistrationConfirmationHTML(
  registration: IRegistration
): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Registration Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .detail-row { margin: 10px 0; padding: 10px; background: white; border-radius: 5px; }
        .label { font-weight: bold; color: #555; }
        .value { color: #333; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .success-badge { background: #4CAF50; color: white; padding: 5px 15px; border-radius: 20px; display: inline-block; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Registration Confirmed!</h1>
          <p>74th Indian Pharmaceutical Congress - 2025</p>
          <div class="success-badge">Payment Successful</div>
        </div>
        
        <div class="content">
          <h2>Dear ${registration.firstName} ${registration.lastName},</h2>
          
          <p>Thank you for registering for the 74th Indian Pharmaceutical Congress - 2025. Your registration has been confirmed and payment has been processed successfully.</p>
          
          <h3>Registration Details:</h3>
          
          <div class="detail-row">
            <span class="label">Registration ID:</span>
            <span class="value">${registration._id}</span>
          </div>
          
          <div class="detail-row">
            <span class="label">Order ID:</span>
            <span class="value">${registration.orderId}</span>
          </div>
          
          <div class="detail-row">
            <span class="label">Name:</span>
            <span class="value">${registration.firstName} ${registration.lastName}</span>
          </div>
          
          <div class="detail-row">
            <span class="label">Email:</span>
            <span class="value">${registration.email}</span>
          </div>
          
          <div class="detail-row">
            <span class="label">Phone:</span>
            <span class="value">${registration.phone}</span>
          </div>
          
          <div class="detail-row">
            <span class="label">Category:</span>
            <span class="value">${registration.category}</span>
          </div>
          
          <div class="detail-row">
            <span class="label">Registration Type:</span>
            <span class="value">${registration.registrationType}</span>
          </div>
          
          <div class="detail-row">
            <span class="label">Institution:</span>
            <span class="value">${registration.institution}</span>
          </div>
          
          <div class="detail-row">
            <span class="label">Payment Amount:</span>
            <span class="value">₹${registration.paymentAmount.toLocaleString()}</span>
          </div>
          
          ${
            registration.isAPTIMember
              ? `
          <div class="detail-row">
            <span class="label">APTI Membership:</span>
            <span class="value">Yes (${registration.aptiMembershipNumber})</span>
          </div>
          `
              : ""
          }
          
          ${
            registration.accommodation
              ? `
          <div class="detail-row">
            <span class="label">Accommodation:</span>
            <span class="value">Required</span>
          </div>
          `
              : ""
          }
          
          ${
            registration.accompanying > 0
              ? `
          <div class="detail-row">
            <span class="label">Accompanying Persons:</span>
            <span class="value">${registration.accompanying}</span>
          </div>
          `
              : ""
          }
          
          <h3>What's Next?</h3>
          <ul>
            <li>You will receive further updates about the conference schedule</li>
            <li>Accommodation details (if requested) will be shared separately</li>
            <li>Conference materials and access details will be provided closer to the event</li>
          </ul>
          
          <p><strong>Important:</strong> Please save this email for your records. You may need to present this confirmation at the venue.</p>
          
          <p>If you have any questions, please contact us at <strong>info@74ipc2025.com</strong></p>
          
          <p>Looking forward to seeing you at the conference!</p>
          
          <p>Best regards,<br>
          <strong>74th IPC 2025 Organizing Committee</strong></p>
        </div>
        
        <div class="footer">
          <p>This is an automated email. Please do not reply to this email.</p>
          <p>© 2025 APTI - Association of Pharmaceutical Teachers of India</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function createPaymentFailureHTML(
  registration: IRegistration,
  failureReason: string
): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Failed</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .detail-row { margin: 10px 0; padding: 10px; background: white; border-radius: 5px; }
        .label { font-weight: bold; color: #555; }
        .value { color: #333; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .retry-button { background: #4CAF50; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }
        .failure-badge { background: #f44336; color: white; padding: 5px 15px; border-radius: 20px; display: inline-block; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>❌ Payment Failed</h1>
          <p>74th Indian Pharmaceutical Congress - 2025</p>
          <div class="failure-badge">Registration Incomplete</div>
        </div>
        
        <div class="content">
          <h2>Dear ${registration.firstName} ${registration.lastName},</h2>
          
          <p>We regret to inform you that your payment for the 74th Indian Pharmaceutical Congress - 2025 registration could not be processed.</p>
          
          <div class="detail-row">
            <span class="label">Order ID:</span>
            <span class="value">${registration.orderId}</span>
          </div>
          
          <div class="detail-row">
            <span class="label">Failure Reason:</span>
            <span class="value">${failureReason}</span>
          </div>
          
          <div class="detail-row">
            <span class="label">Amount:</span>
            <span class="value">₹${registration.paymentAmount.toLocaleString()}</span>
          </div>
          
          <h3>What can you do?</h3>
          <ul>
            <li>Check if your bank account has sufficient balance</li>
            <li>Verify that your card details are correct</li>
            <li>Try using a different payment method</li>
            <li>Contact your bank if the issue persists</li>
          </ul>
          
          <p><strong>To complete your registration, please try again:</strong></p>
          <a href="${process.env.NEXT_PUBLIC_APP_URL}/registration" class="retry-button">Retry Payment</a>
          
          <p>If you continue to face issues, please contact us at <strong>info@74ipc2025.com</strong> with your Order ID: ${registration.orderId}</p>
          
          <p>We apologize for the inconvenience and look forward to completing your registration.</p>
          
          <p>Best regards,<br>
          <strong>74th IPC 2025 Organizing Committee</strong></p>
        </div>
        
        <div class="footer">
          <p>This is an automated email. Please do not reply to this email.</p>
          <p>© 2025 APTI - Association of Pharmaceutical Teachers of India</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Export functions for ESM
export { sendRegistrationConfirmationEmail, sendPaymentFailureEmail };
