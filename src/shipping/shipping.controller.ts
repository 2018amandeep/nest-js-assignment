// src/shipping/shipping.controller.ts
import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ShippingService } from './shipping.service';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Post('calculate-cost')
  calculateShippingCost(@Body('provider') provider: string, @Body('destination') destination: string, @Body('dimensions') dimensions: any) {
    return this.shippingService.calculateShippingCost(provider, destination, dimensions);
  }

  @Get('track/:provider/:trackingNumber')
  trackShipment(@Param('provider') provider: string, @Param('trackingNumber') trackingNumber: string) {
    return this.shippingService.trackShipment(provider, trackingNumber);
  }
}
