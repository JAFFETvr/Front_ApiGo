import { Component } from '@angular/core';
import { Product } from '../../Interface/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('Respuesta de API:', data);  // Verifica la respuesta
        this.products = data;  // Asigna el array de productos directamente
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );
  }

  addProduct(product: Product) {
    this.productService.addProduct(product).subscribe((newProduct) => {
      this.products.push(newProduct);
    });
  }

  editProduct(updatedProduct: Product) {
    this.productService.updateProduct(updatedProduct).subscribe(() => {
      const index = this.products.findIndex(product => product.Id === updatedProduct.Id);
      if (index !== -1) {
        this.products[index] = updatedProduct;
      }
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.Id !== id);
    });
  }
}
