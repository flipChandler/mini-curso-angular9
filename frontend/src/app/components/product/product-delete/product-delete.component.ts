import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;
  
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(foundProduct => {
      this.product = foundProduct;
    });
  }

  deleteProduct(): void {     
    this.productService.delete(this.product).subscribe(() =>{
      this.productService.showMessage('Produto deletado com sucesso!');
      this.router.navigate(["/products"]);
    });    
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
