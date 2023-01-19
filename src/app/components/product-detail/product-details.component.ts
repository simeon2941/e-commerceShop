import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../products';
import { CartService } from '../../cart.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product | undefined;
  products :Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private productService: ProductService,
    private location: Location
    ) {

    }

    ngOnInit() {
this.getProduct();
        }


        getProduct(): void {
          const routeParams = this.route.snapshot.paramMap;
          const id = Number(routeParams.get('productId'));
          this.productService.getProduct(id)
            .subscribe(product => this.product = product);
        }
        goBack(): void {
          this.location.back();
        }

        save(): void {
          if (this.product) {
            this.productService.updateProduct(this.product)
              .subscribe(() => this.goBack());
          }
        }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.snackBar.open('Your product has been added to the cart!', 'Dismiss', {
      duration: 3000,
      panelClass: ['my-snackbar-style']
  });
  }




}
