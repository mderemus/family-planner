import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wellness',
  templateUrl: './wellness.component.html',
  styleUrls: ['./wellness.component.scss'],
})
export class WellnessComponent implements OnInit {
  wellness: any[] = [];
  constructor() {}

  public ngOnInit(): void {
    this.loadWellness();
  }

  loadWellness() {
    this.wellness = [];
    this.wellness = [
      {
        reminder: 'Miller Lite Beer',
        to: 'Dad',
        email: 'dad@test.com',
        date: '03/01/2022',
      },
    ];
  }
}
