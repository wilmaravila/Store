import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterProductPageRoutingModule } from './register-product-routing.module';

import { RegisterProductPage } from './register-product.page';
import {componentsModule} from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterProductPageRoutingModule,
    componentsModule,
  ],
  declarations: [RegisterProductPage]
})
export class RegisterProductPageModule {}
