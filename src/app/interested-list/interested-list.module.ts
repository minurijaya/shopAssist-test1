import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InterestedListPage } from './interested-list.page';

const routes: Routes = [
  {
    path: '',
    component: InterestedListPage,
    children: [
      { path: '', redirectTo: 'product-list', pathMatch: 'full' },

      {
        path: 'product-list',
        loadChildren: './product-list/product-list.module#ProductListPageModule'
      },
      {
        path: 'shop-list',
        loadChildren: './shop-list/shop-list.module#ShopListPageModule'
      }]
  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InterestedListPage]
})
export class InterestedListPageModule { }
