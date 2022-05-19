import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: ActivatedRoute
  ) {}
  product$ :Observable<Product>;
  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    this.product$ = this.productService
      .getProductById(this.router.snapshot.params['id']);

  }
}
