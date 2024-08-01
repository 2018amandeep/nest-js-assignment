// src/product/product.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

  async createProduct(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getProductById(productId: string): Promise<Product> {
    const product = await this.productModel.findById(productId).exec();
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async updateProduct(productId: string, product: Product): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(productId, product, { new: true }).exec();
    if (!updatedProduct) {
      throw new NotFoundException('Product not found');
    }
    return updatedProduct;
  }

  async deleteProduct(productId: string): Promise<void> {
    const result = await this.productModel.deleteOne({ _id: productId }).exec();
    // if (result.n === 0) {
    //   throw new NotFoundException('Product not found');
    // }
  }

  async addProductImages(productId: string, imageUrls: string[]): Promise<Product> {
    const product = await this.productModel.findById(productId).exec();
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    product.images.push(...imageUrls);
    return product.save();
  }
}
