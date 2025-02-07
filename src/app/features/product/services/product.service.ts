import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Interface/product';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.apiUrl).pipe(
      tap(response => console.log("Respuesta de API:", response)), // Verifica la respuesta
      map(response => response.products) // Accede a la propiedad 'products' del objeto
    );
  }

  // Agregar un producto
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  // Editar producto
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${product.Id}`, product);
  }

  // Eliminar producto
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
