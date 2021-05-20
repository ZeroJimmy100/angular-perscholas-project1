import { Component, OnInit, Input } from '@angular/core';
import { Product, products } from '../products';

const prices = [100, 200, 300, 400, 500, 600, 700];

@Component({
  selector: 'app-notify-me',
  templateUrl: './notify-me.component.html',
  styleUrls: ['./notify-me.component.css']
})
export class NotifyMeComponent implements OnInit {
  constructor() {}

  prices = prices;
  products = products;
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
    let listOfItems = '';
    for (let i = 0; i < this.products.length; i++) {
      if (this.notifyPrice < products[i].price) {
        listOfItems += products[i].name + ' ' + '\n';
      }
    }
    window.alert(
      `You will be notified at ${this.email} when price of ${listOfItems} is ${
        this.notifyPrice
      }`
    );
  }

  ngOnInit() {}
}
