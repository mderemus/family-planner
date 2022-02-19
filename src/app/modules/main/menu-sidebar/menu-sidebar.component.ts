import {Component, OnInit} from '@angular/core';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
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
        icon: 'nav-icon fas fa-tachometer-alt'
    },
    {
        name: 'Accounts',
        icon: 'fas fa-wallet',
        children: [
            {
                name: 'Incoming',
                path: ['/sub-menu-1'],
                icon: 'far fa-money-bill-alt'

            },

            {
                name: 'Outgoing',
                path: ['/sub-menu-2'],
                icon: 'fas fa-money-check-alt'
            }
        ]
    },
    {
      name: 'Profile',
      path: ['/profile'],
      icon: 'far fa-address-card'
  },
];
