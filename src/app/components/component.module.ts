
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { IconShoppingComponent } from "./icon-shopping/icon-shopping.component";
import { FormsModule } from "@angular/forms";
import { FormProductComponent } from "./form-product/form-product.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [CardComponent, IconShoppingComponent,FormProductComponent ],
  declarations: [CardComponent, IconShoppingComponent,FormProductComponent, ],
})
export class componentsModule {}