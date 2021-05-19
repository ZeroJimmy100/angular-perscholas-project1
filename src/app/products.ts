export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

export const products: Array<any> = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];

// export const products: Array<Product> = [
//   {
//     id: 1,
//     name: 'Phone XL',
//     price: 799,
//     description: 'A large phone with one of the best screens'
//   },
//   {
//     id: 2,
//     name: 'Phone Mini',
//     price: 699,
//     description: 'A great phone with one of the best cameras'
//   },
//   {
//     id: 3,
//     name: 'Phone Standard',
//     price: 299,
//     description: ''
//   }
// ];

// export const products = [
//   {
//     id: 1,
//     name: 'Phone XL',
//     price: 799,
//     description: 'A large phone with one of the best screens'
//   },
//   {
//     id: 2,
//     name: 'Phone Mini',
//     price: 699,
//     description: 'A great phone with one of the best cameras'
//   },
//   {
//     id: 3,
//     name: 'Phone Standard',
//     price: 299,
//     description: ''
//   }
// ];

export const shoes = [
  {
    id: 4,
    name: 'Nike',
    price: 300,
    description: 'Nike shoes'
  },
  {
    id: 5,
    name: 'Adidas',
    price: 700,
    description: 'Adidas shoes'
  }
];

export const notifyPrice = 500;

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
