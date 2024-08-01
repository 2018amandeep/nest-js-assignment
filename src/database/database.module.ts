import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-project', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    }),
  ],
})
export class DatabaseModule {}
