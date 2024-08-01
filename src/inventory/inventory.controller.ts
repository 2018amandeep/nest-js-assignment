// src/inventory/inventory.controller.ts
import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post('update-stock')
  updateStockLevel(@Body('productId') productId: string, @Body('quantity') quantity: number) {
    this.inventoryService.updateStockLevel(productId, quantity);
    return { message: 'Stock level updated' };
  }

  @Get('stock/:productId')
  getStockLevel(@Param('productId') productId: string) {
    return this.inventoryService.getStockLevel(productId);
  }

  @Post('manage-supplier-stock')
  manageSupplierStock(@Body('supplierId') supplierId: string, @Body('productId') productId: string, @Body('quantity') quantity: number) {
    this.inventoryService.manageSupplierStock(supplierId, productId, quantity);
    return { message: 'Supplier stock managed' };
  }

  @Get('supplier-stock/:supplierId/:productId')
  getSupplierStock(@Param('supplierId') supplierId: string, @Param('productId') productId: string) {
    return this.inventoryService.getSupplierStock(supplierId, productId);
  }
}
