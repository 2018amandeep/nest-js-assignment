// src/cms/strapi.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class StrapiService {
  private readonly apiUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.apiUrl = this.configService.get<string>('STRAPI_API_URL');
  }

  async getEntries(contentType: string): Promise<any> {
    const response = await axios.get(`${this.apiUrl}/${contentType}`);
    return response.data;
  }

  async getEntry(contentType: string, entryId: string): Promise<any> {
    const response = await axios.get(`${this.apiUrl}/${contentType}/${entryId}`);
    return response.data;
  }
}
