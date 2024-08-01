// src/cart/cart.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  private cart = new Map<string, any[]>();

  addToCart(userId: string, product: any) {
    const userCart = this.cart.get(userId) || [];
    userCart.push(product);
    this.cart.set(userId, userCart);
  }

  getCart(userId: string) {
    return this.cart.get(userId) || [];
  }

  removeFromCart(userId: string, productId: string) {
    const userCart = this.cart.get(userId) || [];
    this.cart.set(userId, userCart.filter(p => p.id !== productId));
  }

  clearCart(userId: string) {
    this.cart.set(userId, []);
  }
}
