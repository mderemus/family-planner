import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {MedicalComponent} from './medical.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalComponent,
    // canActivate: [NonAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalRoutingModule {}
