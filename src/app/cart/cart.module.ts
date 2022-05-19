import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CartComponent, CartDetailsComponent],
  imports: [CommonModule, CartRoutingModule, HttpClientModule],
})
export class CartModule {}
