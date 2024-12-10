import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  private http = inject(HttpClient);

  getCategory() {
    return this.http.get<Category[]>('https://api.escuelajs.co/api/v1/categories');
  }
}
