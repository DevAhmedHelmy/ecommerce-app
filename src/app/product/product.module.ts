import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AllProductComponent } from './components/all-product/all-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductComponent,
    AllProductComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, HttpClientModule],
})
export class ProductModule {}
