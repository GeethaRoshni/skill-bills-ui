export class Product {
    name: string = '';
    barcode: string = '';
    manufacturer: ManufacturerDto | null = null;
}

export interface ProductDto {
    id: number;
    name: string;
    barcode: string;
    manufacturer: ManufacturerDto;
}

export interface ManufacturerDto {
    id: number;
    name: string;
}

export class Manufacturer {
    name: string = '';
}

