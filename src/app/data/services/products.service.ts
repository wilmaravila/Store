import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  allProducts:Product[]=[];

  constructor( private http:HttpClient) { }
  private url = 'https://fakestoreapi.com/products';


  setProducts(product:Product) {
    if(this.allProducts!=undefined) {

        this.allProducts.push(product);
    }

  }
  fullProducts():Observable<Product[]| undefined> {
    
      return this.http.get<Product[]|undefined>(this.url);
          
    }
  getProducts(){
    this.fullProducts().subscribe(Response=> {
      this.allProducts=Response;
      console.log(this.allProducts);
    });
  } 

   
    


   
}

