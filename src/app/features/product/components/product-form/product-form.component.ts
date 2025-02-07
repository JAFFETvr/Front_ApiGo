import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../Interface/product';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})

export class ProductFormComponent {
  productForm: FormGroup;
  @Output() productAdded = new EventEmitter<Product>(); // Emitir evento cuando se agrega un producto

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addProduct() {
    if (this.productForm.valid) {
      const newProduct: Product = this.productForm.value;
      this.productService.addProduct(newProduct).subscribe((product) => {
        this.productAdded.emit(product);
        this.productForm.reset();
      });
    }
  }
}
