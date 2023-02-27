import { Controller , Post, Body } from "@nestjs/common/decorators";
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post('/newproduct')
    create(@Body() createProductDto: CreateProductDto) {
        console.log(createProductDto);
        return this.productService.createProduct(createProductDto);
    }
}