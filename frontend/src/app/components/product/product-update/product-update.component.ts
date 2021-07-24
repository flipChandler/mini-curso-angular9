import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: undefined
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  // carrega o produto na inicialização da pagina update
  // paramMap pegou o id em update/:id
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(foundProduct => {
      this.product = foundProduct;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() =>{
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
