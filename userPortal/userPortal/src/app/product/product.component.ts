import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[]

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(resullt => {
      this.products = resullt
      console.log(this.products)
    })
  }

}
