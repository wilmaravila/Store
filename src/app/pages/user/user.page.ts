import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
 
  standalone: false,

  
  
})
export class UserPage implements OnInit {

  imagen_perfil: string = "https://w7.pngwing.com/pngs/388/86/png-transparent-spiderman-cartoon.png";
  name: string = "John Doe";
  email: string = "john@gmail.com";
  phone: string = "1234567890";
  edad: number = 25;
  genero: string = "Masculino";
  pais: string = "México";
  fecha_nacimiento:string = "1995-01-01";
  minDate: string ="1900-01-01"; 
  maxDate: string = "2003-12-31";

  constructor() { }

  ngOnInit() {
  }
  sendEditProfile(){
    alert("Enviado a edición de perfil");
  }

}
