import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterestedListPage } from './interested-list.page';

const routes: Routes = [
    {
      path: 'interested-list',
      component: InterestedListPage,
      children:
        [
          {
            path: 'product-list',
            children:
              [
                {
                  path: '',
                  loadChildren: '../product-list/product-list.module#Tab1PageModule'
                }
              ]
          },
          {
            path: 'shop-list',
            children:
              [
                {
                  path: '',
                  loadChildren: '../shop-list/shop-list.module#Tab2PageModule'
                }
              ]
          },
          {
            path: '',
            redirectTo: '/interested-list/product-list',
            pathMatch: 'full'
          }
        ]
    },
    {
      path: '',
      redirectTo: '/interested-list/product-list',
      pathMatch: 'full'
    }
  ];
@NgModule({
      imports:
        [
          RouterModule.forChild(routes)
        ],
      exports:
        [
          RouterModule
        ]
    })
  export class InterestedListPageRoutingModule {}


