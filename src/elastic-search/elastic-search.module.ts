// elasticsearch.module.ts
import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

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
  exports: [ElasticsearchModule],
})
export class ElasticSearchModule {}
