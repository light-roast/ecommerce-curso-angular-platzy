import { Component, inject, signal } from '@angular/core';
import {ProductComponent} from './../../components/product/product.component';
import {Product} from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/service/cart.service';
import { ProductService } from '../../../shared/service/product.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  ngOnInit() {
    try {
      this.productService.getProducts().subscribe({
        next: (data) => {
          let mappedData: Product[] = data.map((product: Product) => {
            return { ...product, quantity: 0 };
          });
          this.products.set(mappedData);
        },
        error: (err) => {
          console.log(err);
        }
      });
    } catch (error) {
      console.error('Error in ngOnInit:', error);
    }
  }
  // fromChild(event: string){
  //   console.log('estamos en el padre');
  //   console.log(event);
  // }
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  cart = this.cartService.cart;
  products = signal<Product[]>([]);

  addToCartList(product: Product) {
    this.cartService.addToCart(product);
  }
  

  constructor(){
  }
}
