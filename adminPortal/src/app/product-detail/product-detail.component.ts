import { ActivatedRoute } from '@angular/router';
import { CompanyService } from './../services/company.service';
import { Company } from './../models/company';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductServiceService } from '../product-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  id: any
  product: Product = new Product()
  company = new Company()
  companies: Company[]

  constructor(private productService: ProductServiceService,
    private companyService: CompanyService,
    private _route:ActivatedRoute,
    private _location: Location) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id')
    console.log(this.id)
    this.productService.getProductById(this.id).subscribe(result => {
      this.product = result
      this.companyService.getCompanyById(this.product.company).subscribe(result => {
        this.company = result
      })
    })
  }

  deleteProductById(id: any){
    console.log(id)
    this.productService.deleteProductById(id).subscribe(result => {
      console.log('Product deleted successfully')
    })
    this._location.back()
  }

  goBack(): void {
    this._location.back()
  }

}
