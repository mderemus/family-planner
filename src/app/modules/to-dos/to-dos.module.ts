import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToDosComponent} from './to-dos.component';
import {ToDosRoutingModule} from './to-dos-routing.module';
import {ParentTodoComponent} from './parent-todo/parent-todo.component';
import {KidTodoComponent} from './kid-todo/kid-todo.component';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    ToDosRoutingModule,
    TableModule,
    ToastModule,
    ToolbarModule,
  ],
  declarations: [ToDosComponent, ParentTodoComponent, KidTodoComponent],
})
export class ToDosModule {}
