import { Component } from '@angular/core';

import { products } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(productName: string) {
    window.alert('You shared: ' + productName);
  }

  onNotify() {
    alert('You will be notified when product goes on sale!')
  }
}

