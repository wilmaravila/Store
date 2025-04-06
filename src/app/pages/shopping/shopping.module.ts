import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingPageRoutingModule } from './shopping-routing.module';

import { ShoppingPage } from './shopping.page';
import { componentsModule } from 'src/app/components/component.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingPageRoutingModule,
    componentsModule
  ],
  declarations: [ShoppingPage]
})
export class ShoppingPageModule {}
