import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    product: string;
    @Prop()
    model: string;
    @Prop()
    marca: string;
    @Prop()
    nserie: string;
    @Prop()
    heritage: string;
    @Prop()
    invoice: string;
    @Prop()
    nota: string;
    @Prop()
    numberProduct: string;
    @Prop()
    guarantee: string;
    @Prop()
    provider: string;
    @Prop()
    status: string;
    @Prop()
    observation?: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);