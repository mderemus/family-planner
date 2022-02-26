import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {FamilyCalendarComponent} from './family-calendar.component';
import {FamilyCalendarRoutingModule} from './family-calendar-routing.module';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FullCalendarModule,
    FamilyCalendarRoutingModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    ButtonModule,
    TabViewModule,
  ],
  declarations: [FamilyCalendarComponent],
})
export class FamilyCalendarModule {}
