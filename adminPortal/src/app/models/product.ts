import { Company } from './company';
export class Product {
    _id: string
    code: string
    name: string
    details: string
    image: string
    price: string
    company: Company = new Company()
}