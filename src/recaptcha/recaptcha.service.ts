// src/security/recaptcha.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RecaptchaService {
  private readonly recaptchaSecretKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.recaptchaSecretKey = this.configService.get<string>('RECAPTCHA_SECRET_KEY');
  }

  async validateRecaptcha(token: string): Promise<boolean> {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${this.recaptchaSecretKey}&response=${token}`;
    const response = await firstValueFrom(this.httpService.post(url));
    return response.data.success;
  }
}
