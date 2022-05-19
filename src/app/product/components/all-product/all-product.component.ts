import { Product } from './../../product.model';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products$: Observable<Product[]>;
  isLoading: boolean = false;
  categories: any;
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this.products$ = this.productService.getAllProducts();
  }
  filterProducts(event: any) {
    this.products$ = this.productService.filterProducts(event.target.value);
  }
  getAllCategories() {
    this.productService.getAllCategories().subscribe((res) => {
      this.isLoading = true;
      this.categories = res;
    });
  }
  sortProducts(event: any) {

    this.products$ = this.productService.sortProducts(event.target.value);
  }
}
