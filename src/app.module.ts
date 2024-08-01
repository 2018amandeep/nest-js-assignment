import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SearchModule } from './search/search.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { InventoryModule } from './inventory/inventory.module';
import { ShippingModule } from './shipping/shipping.module';
import { MailerModule } from './mailer/mailer.module';
import { RecaptchaModule } from './recaptcha/recaptcha.module';
import { CmsModule } from './cms/cms.module';
import { ProductModule } from './product/product.module';
import { ElasticSearchModule } from './elastic-search/elastic-search.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule, SearchModule, ReviewsModule, CartModule, OrderModule, InventoryModule, ShippingModule, MailerModule, RecaptchaModule, CmsModule, ProductModule, ElasticSearchModule,
    //  ProductModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
