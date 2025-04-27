import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/interfaces/product.module';
import { ProductsService } from 'src/app/data/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: false
})
export class ProductsPage implements OnInit {

    status:boolean=false;
    
    listSend(list:Product[]){
      console.log(list)
    }
  
    
     allProducts:Product[]=[];
  
    constructor(private productService:ProductsService ) { }

 
   

    ngOnInit() {
      if(this.allProducts!=undefined) {
         this.allProducts= this.productService.getProducts()
      }
    }
 
 }
                                                                                          


