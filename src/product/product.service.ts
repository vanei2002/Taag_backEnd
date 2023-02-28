import {Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/product.entity';


@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name)private productModel: Model<ProductDocument>) {}

    async createProductExcel(CreateProductDto: CreateProductDto): Promise<Product> {
        if(CreateProductDto.product == '') return 

        const data = await this.productModel.findOne({product: CreateProductDto.product, nserie: CreateProductDto.nserie,})
    
        if(!data){
            const product = new this.productModel(CreateProductDto);
            product.save();
            return product
        }

        console.log(data);
    }
    
}