import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';

// import { Product } from '../products';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // product: Product = myProduct;
  // @Input() product!: Product;

  constructor() {}

  ngOnInit() {}
}
