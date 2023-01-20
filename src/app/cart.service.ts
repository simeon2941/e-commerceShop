import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  items: Product[] = [];
  removed = false;
  
  addToCart(product: Product, quantity = 1) {
    this.items.push({ ...product, productQuantity: quantity });
}
  addProduct(product: Product, productQuantity = 1) {
    this.items.push({...product, productQuantity});
  }
  incrementQuantity(item: Product) {
    item.productQuantity++;
  }

  decrementQuantity(item: Product) {
    if (item.productQuantity > 1) {
      item.productQuantity--;
    }
  }
  removeProduct(item: Product) {
    this.items = this.items.filter(i => i !== item);
    this.removed = true;

  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotalCost() {
    return this.items.reduce((acc, item) => acc + (item.productQuantity * item.price), 0);
  }

}
