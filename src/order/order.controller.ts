// src/order/order.controller.ts
import { Controller, Post, Get, Put, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  createOrder(@Body() order: any) {
    this.orderService.createOrder(order);
    return { message: 'Order created' };
  }

  @Get(':orderId')
  getOrderById(@Param('orderId') orderId: string) {
    return this.orderService.getOrderById(orderId);
  }

  @Put('update')
  updateOrderStatus(@Body('orderId') orderId: string, @Body('status') status: string) {
    this.orderService.updateOrderStatus(orderId, status);
    return { message: 'Order status updated' };
  }

  @Get('history/:userId')
  getOrderHistory(@Param('userId') userId: string) {
    return this.orderService.getOrderHistory(userId);
  }
}
