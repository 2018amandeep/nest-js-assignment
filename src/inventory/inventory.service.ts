// src/inventory/inventory.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryService {
  private inventory = new Map<string, any>();

  updateStockLevel(productId: string, quantity: number) {
    const product = this.inventory.get(productId) || { stock: 0 };
    product.stock = quantity;
    this.inventory.set(productId, product);
  }

  getStockLevel(productId: string) {
    const product = this.inventory.get(productId);
    return product ? product.stock : 0;
  }

  manageSupplierStock(supplierId: string, productId: string, quantity: number) {
    const supplierStock = this.inventory.get(supplierId) || {};
    supplierStock[productId] = quantity;
    this.inventory.set(supplierId, supplierStock);
  }

  getSupplierStock(supplierId: string, productId: string) {
    const supplierStock = this.inventory.get(supplierId) || {};
    return supplierStock[productId] || 0;
  }
}
