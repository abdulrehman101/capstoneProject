import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from './../models/company';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  id:any
  company: Company = new Company()
  companyForm: FormGroup
  submitted:boolean = false

  constructor(private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.companyService.getCompanyById(this.id).subscribe(result => {
      this.company = result
      console.log(this.company)
    })
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  get f() {
    return this.companyForm.controls
  }

  onSubmit() {
    this.submitted = true
    if (this.companyForm.invalid) {
      return
    } else {
      console.log(this.company)
      this.companyService.updateCompanyById(this.company,this.id).subscribe(result => {
        console.log("Company updated Successfully")
        this.router.navigate(["/companies-list"])
      }, (err) => { console.log(err) })
    }
  }

  goback() {
    this.location.back()
  }
}
