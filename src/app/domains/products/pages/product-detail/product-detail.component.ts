import { Component, Input, inject, signal } from '@angular/core';
import { ProductService } from '../../../shared/service/product.service';
import { Product } from '../../../shared/models/product.model';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { CartService } from '../../../shared/service/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [UpperCasePipe, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal<string>("");
  ngOnInit() {
    if(this.id){
      this.productService.getOneProduct(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if(product.images.length>0){
            this.cover.set(product.images[0]);
          }
        }
      })
    }     
  }

  changeCover(newImg: string) {
    this.cover.set(newImg)
  }

  addToCart(){
    const product = this.product();
    if(product){
      this.cartService.addToCart(product);
    }
  }
}
