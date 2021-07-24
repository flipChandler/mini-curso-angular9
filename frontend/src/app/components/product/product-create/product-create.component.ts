import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: undefined
  }

  constructor(private productService: ProductService,
   private router: Router) { }

  ngOnInit(): void {
    
  }

  // create de productSvc recebe uma reposta que é Observable<Product>
  // subscribe, notifica quando a resposta chegar
  createProduct(): void { 
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!');
      this.router.navigate(['/products']);
    });    
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

  

}
