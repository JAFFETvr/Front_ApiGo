import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductFormComponent,
    ProductCardComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ProductListComponent 
  ]
})
export class ProductModule { }
