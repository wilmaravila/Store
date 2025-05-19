import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,


})
export class AppComponent {
  public appPages = [
    { title: 'Information Profiel', url: '/user', icon: 'person' },
    { title: 'Edit Profiel', url: '/edit-user', icon: 'create' },
    { title: 'Products', url: '/products', icon: 'storefront' },
    { title: 'Shopping', url: '/shopping', icon: 'cart' },
    { title: 'Register Product', url: '/register-product', icon: 'add-circle' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {

    
  }
}
