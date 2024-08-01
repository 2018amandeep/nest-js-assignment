import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Post()
  async indexData(@Body() body) {
    return this.searchService.indexData('products', body);
  }

  @Get()
  async search(@Query('q') query: string) {
    return this.searchService.search('products', {
      query: {
        match: { name: query },
      },
    });
  }
}
