import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/data/interfaces/product.module';
import { ProductsService } from 'src/app/data/services/products.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.page.html',
  styleUrls: ['./register-product.page.scss'],
  standalone: false
})
export class RegisterProductPage implements OnInit {

  listProducts: Product[] = [];
   
  constructor(private productsService: ProductsService) { }
  sendId: number = this.listProducts.length + 1;
  
  
  ngOnInit() {
    console.log(this.sendId)
  }
  status: boolean = true;
  
  listSend(product:Product){
    console.log(product);
    
    this.listProducts.push({...product});
    console.log(this.sendId)
    this.productsService.setProducts(product);
  }

   
  
  

}
