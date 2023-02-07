export class CreateClientDto {
    client:{
        name: string;
        email: string;
        phone: string;
        address: string;
        cep: string;
        city: string;
        state: string;
        number: string;
    }
    project:{
        description: string;
        department: string;
        responsible: string;
    }
}

export class CreateClienExceltDto{
    name: string;
    email: string;
    phone: string;
    address: string;
    cep: string;
    city: string;
    state: string;
    number: string;
    description: string;
    department: string;
    responsible: string;
}
