// src/cms/cms.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContentfulService } from './contentful.service';
import { StrapiService } from './strapi.service';
import { CmsController } from './cms.controller';

@Module({
  imports: [ConfigModule],
  providers: [ContentfulService, StrapiService],
  controllers: [CmsController],
  exports: [ContentfulService, StrapiService],
})
export class CmsModule {}
