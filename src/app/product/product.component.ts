import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../models/master.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: ProductDto[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.setAllProducts();
  }

  setAllProducts():void {
    this.productService.getAll().subscribe(response => {
      this.products = response;
    }, error => {
      console.log(error);
    });
  }

}
