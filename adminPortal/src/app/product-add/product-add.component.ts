import { Product } from './../models/product';
import { Router } from '@angular/router';
import { ProductServiceService } from './../product-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;
  submitted = false;
  product: Product = new Product();
  companies: Company[];
  
  constructor(private productService: ProductServiceService,
    private companyService: CompanyService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      details: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
      company: ['', Validators.required]
    });
    this.companyService.getCompanies().subscribe(result => {
      this.companies = result
      console.log(this.companies)
    })
  }

  get f() {
    return this.productForm.controls
  }

  onSubmit(){
    this.submitted = true
    if (this.productForm.invalid) {
      return
    }    
    console.log(this.product)
    this.productService.addProduct(this.product).subscribe(result => {
      console.log("Product Added Successfully")
      this.router.navigate(['/product-list'])
    }, (err) => { console.log(err) })
  }

}
