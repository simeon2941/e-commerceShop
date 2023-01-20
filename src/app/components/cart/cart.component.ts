import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../../cart.service';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[];
  removed = false;
  constructor(private cartService: CartService,
    private router: Router
    ) {}

  ngOnInit() {
    this.removed = false;
    this.items = this.cartService.getItems();
  }

  incrementQuantity(item: Product) {
    this.cartService.incrementQuantity(item);
  }

  decrementQuantity(item: Product) {
    this.cartService.decrementQuantity(item);
  }

  removeProduct(item: Product) {
    this.cartService.removeProduct(item);
    this.removed = true;
  }

  getTotalCost() {
    return this.cartService.getTotalCost();
  }

}
