import { Controller , Post, Body } from "@nestjs/common/decorators";
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductService } from "./product.service";

@Controller('/products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post('/excel')
    async create(@Body() createProductDto: CreateProductDto) {
        console.log(createProductDto);
        return await this.productService.createProductExcel(createProductDto);
    }
}