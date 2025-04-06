import { Component, OnInit } from '@angular/core';
import { ShoppingPage } from 'src/app/pages/shopping/shopping.page';

@Component({
  selector: 'app-icon-shopping',
  templateUrl: './icon-shopping.component.html',
  styleUrls: ['./icon-shopping.component.scss'],
  standalone: false
})
export class IconShoppingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  rootPage = ShoppingPage;

}
