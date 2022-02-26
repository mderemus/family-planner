import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RemindersComponent} from './reminders.component';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {RemindersRoutingModule} from './reminders-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    RemindersRoutingModule,
  ],
  declarations: [RemindersComponent],
})
export class RemindersModule {}
