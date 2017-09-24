import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './shared/product.service';
import { FilterItemPipe } from './shared/filter-item.pipe';
import { FilterTotalPipe } from './shared/filter-total.pipe';
import { OrderByPipe } from './shared/orderBy.pipe';
 
import {  SharedModule } from '../shared/';
import { ProductEnactmentComponent } from './product-enactment/product-enactment.component';
import { ProductListTotalComponent } from './product-list-total/product-list-total.component'
@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule, ReactiveFormsModule,
     SharedModule
  ],
  declarations: [ProductComponent, ProductFormComponent, ProductListComponent, FilterItemPipe, FilterTotalPipe,OrderByPipe, ProductEnactmentComponent, ProductListTotalComponent,],
  providers: [ProductService]
})
export class ProductModule { }
