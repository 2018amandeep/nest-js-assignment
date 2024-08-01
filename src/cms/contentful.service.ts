// src/cms/contentful.service.ts
import { Injectable } from '@nestjs/common';
import { createClient, Entry } from 'contentful';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ContentfulService {
  private readonly client;

  // constructor(private readonly configService: ConfigService) {
  //   this.client = createClient({
  //     space: this.configService.get<string>('CONTENTFUL_SPACE_ID'),
  //     accessToken: this.configService.get<string>('CONTENTFUL_ACCESS_TOKEN'),
  //   });
  // }

  // async getEntries(contentType: string): Promise<Entry<any>[]> {
  //   const entries = await this.client.getEntries({ content_type: contentType });
  //   return entries.items;
  // }

  // async getEntry(entryId: string): Promise<Entry<any>> {
  //   const entry = await this.client.getEntry(entryId);
  //   return entry;
  // }
}
