import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/data/interfaces/product.module';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
  standalone: false
})
export class FormProductComponent  implements OnInit {

  max:number=5
  formularioRegistro!: FormGroup;
  constructor(private fb: FormBuilder) {
  
   }
  @Input() indexId: number =0;
  @Output() product = new EventEmitter<Product>();
  @Output() solicitud= new EventEmitter<boolean>();
  
  
  ngOnInit() {
    this.formularioRegistro=this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required],
      category:['',Validators.required],
      image:['',Validators.required],
      rating:['',Validators.required],
     
    });
  }
  
  clear=false
  
  categories = ['Electronics', 'Clothing',  'Books', 'Furniture', 'Others'];


  
  

  idSolicitud:boolean=true;
   
   onSubmit( ) {
    
    console.log(this.formularioRegistro.value);  
    
      
    this.solicitud.emit(this.idSolicitud);
    
    this.product.emit(this.formularioRegistro.value);
   
   
    alert('Product registered!');
    
   

    this.formularioRegistro.reset();

   }

  



}
