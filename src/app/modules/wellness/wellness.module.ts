import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WellnessComponent} from './wellness.component';
import {WellnessRoutingModule} from './wellness-routing.module';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  imports: [
    CommonModule,
    WellnessRoutingModule,
    AccordionModule,
    TableModule,
    ToastModule,
    ToolbarModule,
  ],
  declarations: [WellnessComponent],
})
export class WellnessModule {}
