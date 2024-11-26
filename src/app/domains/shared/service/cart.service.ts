import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price * (product.quantity ?? 0), 0);
  })
  
  constructor() { }

  addToCart(product: Product){
    const existingProductIndex = this.cart().findIndex(p => p.id === product.id);
  
    if (existingProductIndex !== -1) {
      // Product already exists in cart, update quantity
      this.cart.update((prevCart) => {
        // Create a new array with the updated product
        const updatedCart = [...prevCart];
        const existingProduct = updatedCart[existingProductIndex];
        updatedCart[existingProductIndex] = {
          ...existingProduct,
          quantity: (existingProduct.quantity ?? 0) + 1,
        };
        return updatedCart;
      });
    } else {
      // Product not in cart, add it with quantity 1
      this.cart.update(prevState => [...prevState, { ...product, quantity: 1 }]);
    }
  }
}
