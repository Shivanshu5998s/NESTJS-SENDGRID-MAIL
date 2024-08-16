import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './email/email.module'; // Ensure correct path

@Module({
  imports: [ConfigModule.forRoot(), EmailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}