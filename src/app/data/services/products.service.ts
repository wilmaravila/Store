import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.module';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  addproduct:Product| undefined;
  estado:boolean=false;
  listProductsShopping:Product[]=[];
  allProducts:Product[]=[];

  constructor(private http:HttpClient) { 

  }
  private url = 'https://fakestoreapi.com/products';

  getProducto():Product | undefined {
    return this.addproduct;
  }

  setProducts(product:Product) {
    this.http.post<Product>(this.url,product).subscribe(Response=>{
      console.log(Response)
      this.allProducts.push(Response)
     
    })

  }
  fieldProducts(): Observable<Product[]> {
    
      return this.http.get<Product[]>(this.url);
  }
  setStatusApi(status:boolean) {
    this.estado=status;
  }
  statusApi():boolean {
    return this.estado;
  }
  
  getProductsShopping(): Product[] {
    return this.listProductsShopping;
  }
  setProductsShopping(product:Product) {
    if(this.listProductsShopping!=undefined) {

        this.listProductsShopping.push(product);
    }

  }
  setProductsList(products:Product[]) {
    this.allProducts=products;
  }
  getAllProducts(): Product[] {
    return this.allProducts;
  }

  


 



   
    


   
}

