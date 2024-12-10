import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import {ProductComponent} from './../../components/product/product.component';
import {Product} from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/service/cart.service';
import { ProductService } from '../../../shared/service/product.service';
import { CategoryService } from '../../../shared/service/category.service';
import { Category } from '../../../shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  ngOnInit() {
    this.getCategory();
  }
  ngOnChanges(changes: SimpleChanges){
    const category_id = changes['category_id'];
    if(category_id){
      this.productService.getProducts(this.category_id).subscribe({
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
    }
  }
  // fromChild(event: string){
  //   console.log('estamos en el padre');
  //   console.log(event);
  // }
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  cart = this.cartService.cart;
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  @Input() category_id?: string;

  addToCartList(product: Product) {
    this.cartService.addToCart(product);
  }

  private getCategory(){
    this.categoryService.getCategory().subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  

  constructor(){
  }
}
