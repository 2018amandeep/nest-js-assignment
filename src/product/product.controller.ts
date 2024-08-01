// src/product/product.controller.ts
import { Controller, Post, Get, Put, Delete, Param, Body, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import Express from 'express';
import * as AWS from 'aws-sdk';
import * as multerS3 from 'multer-s3';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() product: Product): Promise<Product> {
    return this.productService.createProduct(product);
  }

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') productId: string): Promise<Product> {
    return this.productService.getProductById(productId);
  }

  @Put(':id')
  async updateProduct(@Param('id') productId: string, @Body() product: Product): Promise<Product> {
    return this.productService.updateProduct(productId, product);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') productId: string): Promise<void> {
    return this.productService.deleteProduct(productId);
  }

  // @Post(':id/images')
  // @UseInterceptors(FileInterceptor('file', {
  //   storage: multerS3({
  //     s3: s3,
  //     bucket: process.env.AWS_S3_BUCKET,
  //     metadata: (req, file, cb) => {
  //       cb(null, { fieldName: file.fieldname });
  //     },
  //     key: (req, file, cb) => {
  //       cb(null, `${Date.now().toString()}-${file.originalname}`);
  //     },
  //   }),
  // }))
  // async addProductImages(@Param('id') productId: string, @UploadedFiles() files: Express.Multer.File[]): Promise<Product> {
  //   const imageUrls = files.map(file => file.location);
  //   return this.productService.addProductImages(productId, imageUrls);
  // }
}
