import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('api')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send-email')
  async sendEmail(
    @Body() body: { name: string; email: string; message: string },
  ): Promise<{ message: string }> {
    const { name, email, message } = body;

    try {
      await this.emailService.sendEmail(
        'shivanshuc1998@gmail.com',
        'shivanshuchobey5998@gmail.com',
        `Contact Form Submission from ${name}`,
        `Message from ${message}`,
      );
      return { message: 'Email sent successfully' };
    } catch (error) {
      throw new HttpException(
        'Failed to send email',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}