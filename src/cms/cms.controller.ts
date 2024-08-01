// src/cms/cms.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { ContentfulService } from './contentful.service';
import { StrapiService } from './strapi.service';

@Controller('cms')
export class CmsController {
  constructor(
    private readonly contentfulService: ContentfulService,
    private readonly strapiService: StrapiService,
  ) {}

  // @Get('contentful/:contentType')
  // async getContentfulEntries(@Param('contentType') contentType: string) {
  //   return this.contentfulService.getEntries(contentType);
  // }

  // @Get('contentful/:contentType/:id')
  // async getContentfulEntry(@Param('contentType') contentType: string, @Param('id') id: string) {
  //   return this.contentfulService.getEntry(id);
  // }

  @Get('strapi/:contentType')
  async getStrapiEntries(@Param('contentType') contentType: string) {
    return this.strapiService.getEntries(contentType);
  }

  @Get('strapi/:contentType/:id')
  async getStrapiEntry(@Param('contentType') contentType: string, @Param('id') id: string) {
    return this.strapiService.getEntry(contentType, id);
  }
}


// CONTENTFUL_SPACE_ID=your_contentful_space_id
// CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
// STRAPI_API_URL=https://your-strapi-api-url
