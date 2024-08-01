// src/order/order.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  private orders = [];

  createOrder(order) {
    this.orders.push(order);
  }

  getOrderById(orderId: string) {
    return this.orders.find(order => order.id === orderId);
  }

  updateOrderStatus(orderId: string, status: string) {
    const order = this.getOrderById(orderId);
    if (order) {
      order.status = status;
    }
  }

  getOrderHistory(userId: string) {
    return this.orders.filter(order => order.userId === userId);
  }
}


// // src/order/order.service.ts
// import { Injectable } from '@nestjs/common';
// import { MailerService } from '../mailer/mailer.service';

// @Injectable()
// export class OrderService {
//   constructor(private readonly mailerService: MailerService) {}

//   async createOrder(orderDto: CreateOrderDto): Promise<Order> {
//     // Create the order
//     const order = await this.saveOrderToDb(orderDto);

//     // Send confirmation email
//     await this.mailerService.sendEmail(
//       order.customerEmail,
//       'Order Confirmation',
//       'Your order has been placed successfully.',
//       '<strong>Your order has been placed successfully.</strong>'
//     );

//     return order;
//   }

//   private async saveOrderToDb(orderDto: CreateOrderDto): Promise<Order> {
//     // Implementation for saving order to the database
//   }
// }
