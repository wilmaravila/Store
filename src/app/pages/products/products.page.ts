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
    
    statusapi:boolean=false;
    
  
    
     allProducts:Product[]=[];
  
    constructor(private productsService:ProductsService) { 
     
      if(this.productsService.statusApi()==false){
        this.productsService.fieldProducts().subscribe(Response=>{
          this.productsService.setProductsList(Response)
          this.allProducts=this.productsService.getAllProducts()
          console.log(this.statusapi)
          this.productsService.setStatusApi(true)
          console.log(this.allProducts)
          
        })
      }
      this.allProducts=this.productsService.getAllProducts()
      
      
    }
    
    
    
    
    ngOnInit() {
      console.log(this.allProducts)
      console.log(this.productsService.getProducto()!)
    }
  

  
  listSend(list:Product){
    console.log(list)
    this.productsService.setProductsShopping(list)
    

  }
}
