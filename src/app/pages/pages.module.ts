import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingComponent } from './landing/landing.component';
import { BannerComponent } from './layout/banner/banner.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrandsComponent } from './layout/brands/brands.component';
import { TopProductsComponent } from './layout/top-products/top-products.component';
import { ProductComponent } from './layout/top-products/product/product.component';


@NgModule({
  declarations: [LandingComponent, BannerComponent, BrandsComponent, TopProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule
  ]
})
export class PagesModule { }
