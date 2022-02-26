import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {KidTodoComponent} from './kid-todo/kid-todo.component';
import {ParentTodoComponent} from './parent-todo/parent-todo.component';
import {ToDosComponent} from './to-dos.component';

const routes: Routes = [
  {
    path: '',
    component: ToDosComponent,
    // canActivate: [NonAuthGuard]
    children: [
      {path: '', component: ParentTodoComponent},
      {
        path: 'parent-todo',
        component: ParentTodoComponent,
      },
      {
        path: 'kid-todo',
        component: KidTodoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDosRoutingModule {}
