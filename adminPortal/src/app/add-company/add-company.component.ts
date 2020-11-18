import { Router } from '@angular/router';
import { CompanyService } from './../services/company.service';
import { Company } from './../models/company';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  companyForm: FormGroup;
  submitted:boolean = false
  company: Company = new Company()

  constructor(private formBuilder:FormBuilder,
    private companyService:CompanyService,
    private router:Router) { }

  ngOnInit(): void {
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
      this.companyService.addCompany(this.company).subscribe(result=>{
        console.log("Company Added Successfully")
        this.router.navigate(["/companies-list"])
      }, (err) => { console.log(err)})
    }
  }
}
