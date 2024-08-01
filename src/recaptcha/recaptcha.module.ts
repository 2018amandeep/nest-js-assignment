import { Module } from '@nestjs/common';
import { RecaptchaService } from './recaptcha.service';
import { RecaptchaController } from './recaptcha.controller';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  exports: [RecaptchaService],  // Make RecaptchaService available to other modules
  controllers: [RecaptchaController],
  providers: [RecaptchaService],
})
export class RecaptchaModule {}
