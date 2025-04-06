import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
   
  },

  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'edit-user',
    loadChildren: () => import('./pages/edit-user/edit-user.module').then( m => m.EditUserPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./pages/shopping/shopping.module').then( m => m.ShoppingPageModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./pages/shopping/shopping.module').then( m => m.ShoppingPageModule)
  },
  {
    path: 'register-product',
    loadChildren: () => import('./pages/register-product/register-product.module').then( m => m.RegisterProductPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
