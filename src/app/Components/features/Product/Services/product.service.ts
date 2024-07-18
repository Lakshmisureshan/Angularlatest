import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

getAllProducts()
{

  return this.http.get<Product[]>('https://localhost:7124/api/Product/GetallProducts');
}


}
