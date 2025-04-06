
import { Component, EventEmitter, input, Input,  OnInit, Output, output, viewChild } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';


import { Product } from 'src/app/data/interfaces/product.module';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false
  
})
export class CardComponent  implements OnInit {

  isModalOpen:boolean=false;
  indix:number | undefined=0
   selectProduct:Product | undefined
   num:number=1
   listN:number[]=[1,2,3,4,5,6]
   numProducts:number=0
   listProductsSend:Product[]=[]

   
   setOpen(click:boolean,id:number | undefined) {
     this.isModalOpen=click;
     console.log(this.isModalOpen)
     console.log(id)
     
     this.selectProduct =this.obtenerProducto(id)
  
     
   }
   @Output() addProduct = new EventEmitter<Product[]>();
 
   @Input() shopping:boolean=false;
 
   @Input() allProducts:Product[]| undefined =[
   ]
    
   addCart(){
     console.log(this.selectProduct)
      if(this.selectProduct !== undefined){
        this.listProductsSend.push(this.selectProduct)
        this.addProduct.emit(this.listProductsSend)
        console.log(this.listProductsSend)
      }

   }
   
   obtenerProducto(id:number|undefined): Product | undefined {
    if (this.allProducts === undefined) {
      this.allProducts = [];
    }
    for (let product of this.allProducts) {
      if (id === product.id) {
        return product;
        }
        }
        return undefined;
        }
        
       
  ngOnInit() {
         
         
        }
        
  constructor() { }


  delateProduct(id:number|undefined){
    console.log(id)
    this.indix=id
    console.log(this.indix)
    
    this.isModalOpen.valueOf()
    //this.setOpen(false, this.indix)
    
    
    
    if (this.allProducts === undefined) {
      this.allProducts = [];
    }
    
    for (let i of this.allProducts) {
      console.log(i)
      console.log("si recorre")
      console.log(i.id)
      
      if (i.id === id) {
        console.log("si entra")
        console.log(i)
        console.log(this.isModalOpen)
        
        this.allProducts.splice(this.allProducts.indexOf(i),1)
        this.isModalOpen=false
        this.selectProduct=undefined
        break;
       
        

        console.log(this.listProductsSend)
      }
        
    
    }
      
  }
}

