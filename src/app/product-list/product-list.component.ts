import { Component } from '@angular/core';

import { products, Product } from '../products';

// console.log("products");
// console.log(JSON.stringify(products));

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // products = products.concat(shoes);

  productsOfList = products;

  // products: Array<Product> = products.concat(shoes);

  productsAsString() {
    return JSON.stringify(products);
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(myProduct) {
    window.alert(
      `notify me for ${myProduct.name} for the price of $${myProduct.price}`
    );
  }

  sayHello(productName: string) {
    return productName + ' details';
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
