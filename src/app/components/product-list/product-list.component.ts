import { Component } from '@angular/core';
import {Product, products } from '../../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //products: Product[] = [];
  products= products;
  share() {
    window.alert('The product has been shared!');
  }
  onNotify(){
    window.alert('You will be identified when this product goes on sale');
  }
}

