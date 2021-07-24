import { Product } from './../product.model';


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService,
    private router: Router) { }

  // subscribe traz o list do backend
  ngOnInit(): void {
    this.productService.read().subscribe(list => {
      this.products = list;
      console.log(this.products);
    });
  }
}




