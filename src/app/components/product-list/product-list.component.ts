import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

import { Product } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products :Product[] = [];

  constructor(private productService: ProductService
    ) { }

    ngOnInit(): void {
      this.getProducts();
    }

    getProducts(): void {
      this.productService.getProducts()
      .subscribe(products => this.products = products);

    }

  share(productName: string) {
    window.alert('You shared: ' + productName);
  }

  onNotify() {
    alert('You will be notified when product goes on sale!')
  }
}

