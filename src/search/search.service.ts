import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async indexData(index: string, body: any) {
    return this.elasticsearchService.index({
      index,
      body,
    });
  }

  async search(index: string, query: any) {
    return this.elasticsearchService.search({
      index,
      body: query,
    });
  }
}
