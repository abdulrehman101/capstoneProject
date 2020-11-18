import { ProductServiceService } from './../product-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/item';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  id: any
  items: Item[]
  total: number = 0
  product: Product = new Product()

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductServiceService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })

    if (this.id) {
      this.productService.getProductById(this.id).subscribe(result => {
        this.product = result
        console.log(this.product)
        var item: Item = {
          product: this.product,
          quantity: 1
        };
        if (localStorage.getItem('cart') == null) {
          let cart: any = [];
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart)); // Convert JSON to string // local and session storage value must always be string 
        } else {
          let cart: any = JSON.parse(localStorage.getItem('cart')); // Convert back to JSON
          let index: number = -1;
          for (var i = 0; i < cart.length; i++) {
            let item: Item = JSON.parse(cart[i]);
            if (item.product._id == this.id) {
              index = i;
              break;
            }
          }
          if (index == -1) {
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
          } else {
            let item: Item = JSON.parse(cart[index]);
            item.quantity += 1;
            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        this.loadCart();
      })
    } else {
      this.loadCart();
    }
  }

  loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart != null) {
      for (var i = 0; i < cart.length; i++) {
        let item = JSON.parse(cart[i]);
        this.items.push({
          product: item.product,
          quantity: item.quantity
        });
        this.total += item.product.price * item.quantity;
      }
    }
  }

  remove(id: string): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product._id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
  }

  cartInfo: any;
  checkOut() {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    this.cartInfo = cart;
    console.log(cart); // you have to call post method to store card details in DB
  }
}
