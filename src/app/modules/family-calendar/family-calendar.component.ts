import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from '@fullcalendar/angular'; // useful for typechecking
import {render} from 'preact/compat';

@Component({
  selector: 'app-family-calendar',
  templateUrl: './family-calendar.component.html',
  styleUrls: ['./family-calendar.component.scss'],
})
export class FamilyCalendarComponent implements OnInit {
  events: any[];

  options: CalendarOptions;

  header: any;
  a;
  constructor() {}

  ngOnInit() {
    this.options = {
      initialDate: '2022-02-22',
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      dateClick: this.handleDateClick.bind(this), // bind is important!
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      events: [
        {title: 'event 1', date: '2022-02-01'},
        {title: 'event 2', date: '2022-03-02'},
      ],
      windowResize: (a) => {
        a.view.calendar.updateSize();
      },
    };
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }

  onResize(event: any): void {}
}
