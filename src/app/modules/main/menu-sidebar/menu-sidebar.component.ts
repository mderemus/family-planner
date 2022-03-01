import {Component, OnInit} from '@angular/core';
import {AppService} from '@/shared/services/app.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit {
  public user;
  public menu = MENU;

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.user = this.appService.user;
  }
}

export const MENU = [
  {
    name: 'Dashboard',
    path: ['/'],
    icon: 'fas fa-tachometer-alt',
  },
  {
    name: 'Family Calendar',
    path: ['/family-calendar'],
    icon: 'far fa-calendar-alt',
  },
  {
    name: 'Grocery List',
    path: ['/grocery-list'],
    icon: 'fas fa-shopping-basket',
  },
  {
    name: 'To-Dos',
    icon: 'fas fa-tasks',
    children: [
      {
        name: 'Parents',
        path: ['/to-dos/parent-todo'],
        icon: 'fas fa-user-friends',
      },

      {
        name: 'Kids',
        path: ['/to-dos/kid-todo'],
        icon: 'fas fa-child',
      },
    ],
  },
  {
    name: 'Wellness',
    path: ['/wellness'],
    icon: 'fas fa-file-prescription',
  },
  {
    name: 'Reminders',
    path: ['/reminders'],
    icon: 'fas fa-user-clock',
  },
  {
    name: 'Admin',
    children: [
      {
        name: 'Family Setup',
        path: ['/profile'],
        icon: 'fas fa-users',
      },

      {
        name: 'List Setup',
        path: ['/sub-menu-2'],
        icon: 'fas fa-clipboard-list',
      },
    ],
  },
];
