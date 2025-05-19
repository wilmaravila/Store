
import { CommonModule, formatCurrency } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { ReactiveFormsModule } from "@angular/forms";
import { IconShoppingComponent } from "./icon-shopping/icon-shopping.component";
import { FormsModule } from "@angular/forms";
import { FormProductComponent } from "./form-product/form-product.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [CardComponent, IconShoppingComponent,FormProductComponent ],
  declarations: [CardComponent, IconShoppingComponent,FormProductComponent, ],
})
export class componentsModule {}