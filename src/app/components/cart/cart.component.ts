import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../../cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) { }

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.get('name'));
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}
