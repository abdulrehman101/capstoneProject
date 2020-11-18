import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  price: any
  checkoutForm: FormGroup
  greet = false
  submitted = false

  constructor(private _route: ActivatedRoute,
    private _location: Location,
    private formBuilder: FormBuilder,
    public auth: AuthService) { }

  ngOnInit(): void {
    this.price = this._route.snapshot.paramMap.get('total')
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      CardNumber: ['', Validators.required],
      Expiration: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  get f() {
    return this.checkoutForm.controls
  }

  onSubmit(){
    this.submitted = true
    if (this.checkoutForm.invalid) {
      return
    } else {
      this.greet = true
      localStorage.clear()
    }   
  }
}
