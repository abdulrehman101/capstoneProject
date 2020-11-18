import { Product } from './models/product';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }),
  ResponseType: 'Product'
};

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  // URL to web api
  private productUrl = 'http://localhost:5000/api/products'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
  }

  getProductById(id: any): Observable<Product> {
    return this.http.get<Product>(`http://localhost:5000/api/productbyid/${id}`)
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productUrl, product, httpOptions);
  }

  updateProductById(product: Product, id: any): Observable<Product> {
    return this.http.put<Product>(`${this.productUrl}/${id}`, product, httpOptions);
  }

  deleteProductById(id: any): Observable<Product> {
    return this.http.delete<Product>(`${this.productUrl}/${id}`)
  }
}
