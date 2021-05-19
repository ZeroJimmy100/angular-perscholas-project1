import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';

// import { Product } from '../products';

const awesomeProduct = {
  id: 1,
  name: 'nike',
  price: 5
};

import { Product, products, notifyPrice } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // product: Product = myProduct;
  @Input() product!: Product;

  notifyMe(myProduct) {
    window.alert(
      `notify me for ${myProduct.name} for the price of ${myProduct.price}`
    );
  }

  notifyPrice = notifyPrice;

  constructor() {}

  ngOnInit() {}
}
