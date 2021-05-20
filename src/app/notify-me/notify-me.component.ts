import { Component, OnInit, Input } from '@angular/core';
import { Product, products } from '../products';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

const prices = [100, 200, 300, 400, 500, 600, 700];

@Component({
  selector: 'app-notify-me',
  templateUrl: './notify-me.component.html',
  styleUrls: ['./notify-me.component.css']
})
export class NotifyMeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  product;
  products = products;
  prices = prices;
  email = '';
  notifyPrice;

  notifyAlert(event: any) {
    this.notifyPrice = event.target.value;
    window.alert(`Price notification changed to: ${event.target.value}`);
  }

  onKey(event: any) {
    this.email += event.target.value;
  }

  notifyUserItem() {
    window.alert(
      `You will be notified at ${this.email} when price of ${
        this.product.name
      } is ${this.notifyPrice}`
    );
  }

  ngOnInit() {
    //   this.route.queryParams.subscribe(params => {
    //   this.productId = params['productId'];
    // });
    const routeParams = this.route.snapshot.paramMap;
    const leProductId = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === leProductId);
  }
}
