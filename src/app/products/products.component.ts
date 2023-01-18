import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../products';
import { ProductService } from '..//product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product [] = [];
  constructor(private productService: ProductService) {


  }

  ngOnInit() {
this.getProducts();
  }


  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }
  editProduct(product) {
    // code to edit product goes here
  }

  deleteProduct(product) {
    // code to delete product goes here
  }

}
