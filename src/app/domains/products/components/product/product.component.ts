import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { DatePipe } from '@angular/common';
import { TimeAgoPipe } from "../../../shared/pipes/time-ago.pipe";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [DatePipe, TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product;

  @Output() addToCart = new EventEmitter();
  
  addToCartHandler(){
    this.addToCart.emit(this.product);
  }
}
