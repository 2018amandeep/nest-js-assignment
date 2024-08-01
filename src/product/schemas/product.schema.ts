// src/product/schemas/product.schema.ts
import { Schema, Document } from 'mongoose';

export const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  inventory: { type: Number, required: true },
  images: [{ type: String }],
});

export interface Product extends Document {
  id: string;
  name: string;
  description: string;
  price: number;
  inventory: number;
  images: string[];
}
