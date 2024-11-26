export interface Product {
    id: string,
    title: string,
    price: number,
    images: string[],
    creationAt: string,
    quantity?: number
}