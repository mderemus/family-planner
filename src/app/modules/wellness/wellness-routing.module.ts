import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {WellnessComponent} from './wellness.component';

const routes: Routes = [
  {
    path: '',
    component: WellnessComponent,
    // canActivate: [NonAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WellnessRoutingModule {}
