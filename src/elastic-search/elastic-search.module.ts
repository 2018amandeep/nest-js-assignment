// elasticsearch.module.ts
import { Module } from '@nestjs/common';
import { ElasticsearchModule, ElasticsearchService } from '@nestjs/elasticsearch';
import { ElasticSearchController } from './elastic-search.controller';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200', // Replace with your Elasticsearch node URL
      // Optional: authentication details
      // auth: {
      //   username: 'your-username',
      //   password: 'your-password',
      // },
    }),
  ],
  providers: [ElasticsearchService],
  controllers: [ElasticSearchController],
  exports: [ElasticsearchModule],
})
export class ElasticSearchModule {}
