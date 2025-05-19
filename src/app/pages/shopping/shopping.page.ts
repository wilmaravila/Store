import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/interfaces/product.module';
import { ProductsService } from 'src/app/data/services/products.service';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
  standalone: false,

})
export class ShoppingPage implements OnInit {

  lstProducts: Product[] = [];
   
  allProducts: Product[] = [];
  
  constructor(private productsService:ProductsService) { }
  
  ngOnInit() {
 this.allProducts =this.productsService.getProductsShopping();

  }

}
