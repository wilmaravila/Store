import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/data/interfaces/product.module';
import { NgForm,FormControl } from '@angular/forms'
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
  standalone: false
})
export class FormProductComponent  implements OnInit {

  max:number=5
  
  constructor() { }
  @Input() indexId: number = 1;
  @Output() product = new EventEmitter<Product>();
  @Output() solicitud= new EventEmitter<boolean>();
  
  
  
  clear=false
  productRegist: Product = {
    id: this.indexId, 
    title: '',
    description: '',
    price: 0,
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  };
  categories = ['Electronics', 'Clothing',  'Books', 'Furniture', 'Others'];
  ngOnInit() {
  }


  
  

  idSolicitud:boolean=true;
   
   onSubmit() {
    
    console.log(this.productRegist);
    if(this.productRegist.title!="" && this.productRegist.price !=0 && this.productRegist.image!=""&& this.productRegist.category !=""){
      
    this.solicitud.emit(this.idSolicitud)
    
    this.product.emit(this.productRegist);
   
   
    alert('Product registered!');
    
    this.productRegist = {
      id: this.indexId, 
      title: '',
      description: '',
      price: 0,
      category: '',
      image: '',
      rating: {
        rate: 0,
        count: 0
      }
    };

    }else{
      alert("Ingrese todos los valores correspondientes")
    }


   }

  



}
