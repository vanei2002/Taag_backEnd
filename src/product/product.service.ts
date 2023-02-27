import {Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.entity';


@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name)private productModel: Model<ProductDocument>) {}

    async createProduct(product: Product): Promise<Product> {
        const newProduct = new this.productModel(product);
        return newProduct.save();
    }
    
}