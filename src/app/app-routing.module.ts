import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'interested-list', pathMatch: 'full' },

  {
    path: 'interested-list',
    loadChildren:
      './interested-list/interested-list.module#InterestedListPageModule'
  },
  { path: 'grocery-list', loadChildren: './grocery-list/grocery-list.module#GroceryListPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
