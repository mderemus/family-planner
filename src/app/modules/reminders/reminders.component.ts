import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss'],
})
export class RemindersComponent implements OnInit {
  reminders: any[] = [];
  constructor() {}

  public ngOnInit(): void {
    this.loadReminders();
  }

  loadReminders() {
    this.reminders = [];
    this.reminders = [
      {
        reminder: 'Pick up Katy after practice @ 4pm',
        to: 'Dad',
        email: 'dad@test.com',
        date: '03/01/2022',
      },
      {
        reminder: 'Buy filter at store',
        to: 'Dad',
        email: 'dad@test.com',
        date: '03/10/2022',
      },
      {
        reminder: 'Book beach vacation',
        to: 'Mom',
        email: 'mom@test.com',
        date: '06/01/2022',
      },
    ];
  }
}
