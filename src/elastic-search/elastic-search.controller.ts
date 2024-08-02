// example.controller.ts
import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { ElasticsearchService } from './elastic-search.service';

@Controller('elastic')
export class ElasticSearchController {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  // @Post('index')
  // async indexDocument(
  //   @Body('index') index: string,
  //   @Body('id') id: string,
  //   @Body('body') body: any,
  // ) {
  //   return this.elasticsearchService.indexDocument(index, id, body);
  // }

  // @Get('get/:index/:id')
  // async getDocument(
  //   @Param('index') index: string,
  //   @Param('id') id: string,
  // ) {
  //   return this.elasticsearchService.getDocument(index, id);
  // }

  // @Get('search')
  // async search(
  //   @Query('index') index: string,
  //   @Query('query') query: any,
  // ) {
  //   return this.elasticsearchService.search(index, JSON.parse(query));
  // }
}
