import { Component } from '@angular/core';
import { Product } from '../../Interface/product';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

    @Input() product!: Product;
    @Output() editProduct = new EventEmitter<Product>();
    @Output() deleteProduct = new EventEmitter<number>();
  
    isEditModalOpen = false;
    editedProduct!: Product;
  
    ngOnInit() {
      this.editedProduct = { ...this.product };
    }
  
    openEditModal() {
      this.isEditModalOpen = true;
    }
  
    closeEditModal() {
      this.isEditModalOpen = false;
    }
  
    saveEdit() {
      this.editProduct.emit(this.editedProduct);
      this.closeEditModal();
    }
  
    onDelete() {
      if (!this.product.Id) {
        console.error('El producto no tiene un ID válido:', this.product);
        return;
      }
      this.deleteProduct.emit(this.product.Id);
    }
  }
  

