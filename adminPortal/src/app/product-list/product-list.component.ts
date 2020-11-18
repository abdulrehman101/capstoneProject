import { ProductServiceService } from './../product-service.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    return this.productService.getProducts().subscribe(result => {
      this.products = result
      console.log(this.products)
    })
  }

}
