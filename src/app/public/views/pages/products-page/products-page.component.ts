import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-products-page',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  products = [
    {
      name: 'Batz-Maru T-Shirt',
      image: 'https://i.imgur.com/yLIEt7c.jpeg',
      price: 'Sizes: S-M-L',
      fabric: '100% Cotton'
    },
    {
      name: 'Keroppi Bag',
      image: 'https://i.imgur.com/LgZolQH.png',
      price: '12" tall',
      fabric: 'Clear Vinyl'
    },
    {
      name: 'Hello Kitty T-Shirt',
      image: 'https://i.imgur.com/LSmtMRO.jpeg',
      price: 'Sizes: S-M-L',
      fabric: '100% Cotton'
    },
    {
      name: 'Pochacco Bag',
      image: 'https://i.imgur.com/lZU1esF.jpeg',
      price: '15" tall',
      fabric: 'Vinyl Beach Bag'
    }
  ];
}
