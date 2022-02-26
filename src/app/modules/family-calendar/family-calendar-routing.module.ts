import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {FamilyCalendarComponent} from './family-calendar.component';

const routes: Routes = [
  {
    path: '',
    component: FamilyCalendarComponent,
    // canActivate: [NonAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyCalendarRoutingModule {}
