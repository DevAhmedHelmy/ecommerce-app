import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    let url = environment.apiUrl + '/products';
    return this.http.get<Product[]>(url).pipe((res) => {
      return res;
    });
  }

  filterProducts(category: string) {
    let url = environment.apiUrl + '/products/category/' + category;
    return this.http.get<Product[]>(url).pipe((res) => {
      return res;
    });
  }

  getAllCategories() {
    let url = environment.apiUrl + '/products/categories';
    return this.http.get(url).pipe((res) => {
      return res;
    });
  }

  getProductById(id: number) {
    let url = environment.apiUrl + '/products/' + id;
    return this.http.get<Product>(url).pipe((res) => {
      return res;
    });
  }

  sortProducts(sortBy: string) {
    let url = environment.apiUrl + '/products?sort=' + sortBy;
    return this.http.get<Product[]>(url).pipe((res) => {
      return res;
    });
  }
}
