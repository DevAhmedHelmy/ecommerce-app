
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AllProductComponent } from './components/all-product/all-product.component';

const routes: Routes = [
  { path: "", component: AllProductComponent },
  {path:"details/:id",component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
