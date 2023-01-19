import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './products';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../app/message.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(_ => this.log('fetched Products')),
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }


  getProductNo404<Data>(id: number): Observable<Product> {
    const url = `${this.getProducts}/?id=${id}`;
    return this.http.get<Product[]>(url)
      .pipe(
        map(Products => Products[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} Product id=${id}`);
        }),
        catchError(this.handleError<Product>(`getProduct id=${id}`))
      );
  }

  /** GET Product by id. Will 404 if id not found */
getProduct(id: number): Observable<Product> {
  const url = `${this.getProducts}/${id}`;
  return this.http.get<Product>(url).pipe(
    tap(_ => this.log(`fetched Product id=${id}`)),
    catchError(this.handleError<Product>(`getProduct id=${id}`))
  );
}

/* GET Products whose name contains search term */
searchProducts (term: string): Observable<Product[]> {
  if (!term.trim()) {
    // if not search term, return empty Product array.
    return of([]);
  }
  return this.http.get<Product[]>(`${this.getProducts}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found Products matching "${term}"`) :
       this.log(`no Products matching "${term}"`)),
    catchError(this.handleError<Product[]>('searchProducts', []))
  );
}

//////// Save methods //////////

// /** POST: add a new Product to the server */
// addProduct(Product: Product): Observable<Product> {
//   return this.http.post<Product>(this.getProducts, Product, this.httpOptions).pipe(
//     tap((newProduct: Product) => this.log(`added Product w/ id=${newProduct.id}`)),
//     catchError(this.handleError<Product>('addProduct'))
//   );
// }

/** DELETE: delete the Product from the server */
deleteProduct(id: number): Observable<Product> {
  const url = `${this.getProducts}/${id}`;

  return this.http.delete<Product>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted Product id=${id}`)),
    catchError(this.handleError<Product>('deleteProduct'))
  );
}

// /** PUT: update the Product on the server */
// updateProduct(Product: Product): Observable<any> {
//   return this.http.put(this.getProducts, Product, this.httpOptions).pipe(
//     tap(_ => this.log(`updated Product id=${Product.id}`)),
//     catchError(this.handleError<any>('updateProduct'))
//   );
// }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for Product consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/** Log a ProductService message with the MessageService */
private log(message: string) {
  this.messageService.add(`ProductService: ${message}`);
}
}
