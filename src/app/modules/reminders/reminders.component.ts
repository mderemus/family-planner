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
        reminder: 'Miller Lite Beer',
        to: 'Dad',
        email: 'dad@test.com',
        date: '03/01/2022',
      },
    ];
  }
}
