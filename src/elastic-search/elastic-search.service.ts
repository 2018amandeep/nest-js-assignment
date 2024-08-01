// elasticsearch.service.ts
import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';
// import { InjectElasticsearch } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticsearchService {
//   constructor(@InjectElasticsearch() private readonly client: Client) {}

//   async indexDocument(index: string, id: string, body: any): Promise<any> {
//     return this.client.index({
//       index,
//       id,
//       body,
//     });
//   }

//   async getDocument(index: string, id: string): Promise<any> {
//     return this.client.get({
//       index,
//       id,
//     });
//   }

//   async search(index: string, query: any): Promise<any> {
//     return this.client.search({
//       index,
//       body: query,
//     });
//   }
}
