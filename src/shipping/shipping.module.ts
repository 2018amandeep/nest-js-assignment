// src/shipping/shipping.module.ts
import { Module } from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { ShippingController } from './shipping.controller';

@Module({
  imports: [],
  providers: [ShippingService],
  controllers: [ShippingController],
})
export class ShippingModule {}
