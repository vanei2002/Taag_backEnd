import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
    @Prop()
    name: string;
    @Prop()
    email: string;
    @Prop()
    phone: string;
    @Prop()
    address: string;
    @Prop()
    cep: string;
    @Prop()
    city: string;
    @Prop()
    state: string;
    @Prop()
    number: string;
    @Prop()
    description: string;
    @Prop()
    department: string;
    @Prop()
    responsible: string;
    @Prop()
    work: string;
}


export const ClientSchema = SchemaFactory.createForClass(Client);