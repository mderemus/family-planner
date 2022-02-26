import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {GroceryListComponent} from './grocery-list.component';

const routes: Routes = [
  {
    path: '',
    component: GroceryListComponent,
    // canActivate: [NonAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroceryListRoutingModule {}
