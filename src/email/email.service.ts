import { Injectable, Logger } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendEmail(
    to: string,
    from: string,
    subject: string,
    text: string,
  ): Promise<void> {
    const msg = {
      to,
      from,
      subject,
      text,
    };

    try {
      await sgMail.send(msg);
      this.logger.log('Email sent successfully');
    } catch (error) {
      this.logger.error('Failed to send email', error.stack);
      throw new Error('Failed to send email');
    }
  }
}