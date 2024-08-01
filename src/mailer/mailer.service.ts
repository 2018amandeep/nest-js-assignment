// src/mailer/mailer.service.ts
import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class MailerService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendEmail(to: string, subject: string, text: string, html: string): Promise<void> {
    const msg = {
      to,
      from: process.env.SENDGRID_FROM_EMAIL, // Use the email address or domain you verified
      subject,
      text,
      html,
    };

    await sgMail.send(msg);
  }
}


// SENDGRID_API_KEY=your_sendgrid_api_key
// SENDGRID_FROM_EMAIL=your_verified_email@example.com
