import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/cart.service';
import { ProductService } from 'src/app/product.service';

import { Product } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products :Product[] = [];

  constructor(private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar,
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
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.snackBar.open('Your product has been added to the cart!', 'Dismiss', {
      duration: 3000,
      panelClass: ['my-snackbar-style']
  });
  }

}

