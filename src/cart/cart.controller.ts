// src/cart/cart.controller.ts
import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  addToCart(@Body('userId') userId: string, @Body('product') product: any) {
    this.cartService.addToCart(userId, product);
    return { message: 'Product added to cart' };
  }

  @Get(':userId')
  getCart(@Param('userId') userId: string) {
    return this.cartService.getCart(userId);
  }

  @Delete('remove')
  removeFromCart(@Body('userId') userId: string, @Body('productId') productId: string) {
    this.cartService.removeFromCart(userId, productId);
    return { message: 'Product removed from cart' };
  }

  @Delete('clear/:userId')
  clearCart(@Param('userId') userId: string) {
    this.cartService.clearCart(userId);
    return { message: 'Cart cleared' };
  }
}
