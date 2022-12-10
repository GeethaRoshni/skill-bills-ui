import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDto } from '../models/master.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<ProductDto> {
    return this.http.get(`http://localhost:8080/api/products/all`) as Observable<ProductDto>;
  }

}
