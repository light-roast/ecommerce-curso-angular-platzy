import { Category } from "./category.model"

export interface Product {
    id: string,
    description: string,
    category: Category,
    title: string,
    price: number,
    images: string[],
    creationAt: string,
    quantity?: number
}