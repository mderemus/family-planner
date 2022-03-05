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
        type: 'Multi-Vitamin',
        familyMember: 'Dad',
        note: 'Take 2 a day',
        date: '03/01/2022',
      },
      {
        type: 'Prescription',
        familyMember: 'Mom',
        note: 'Two rxs daily for HBP',
        date: '01/01/2022',
      },
      {
        type: 'PCP',
        familyMember: 'Dad',
        note: 'Dr. Gregory 555-333-2222',
        date: '03/01/2022',
      },
      {
        type: 'Family Pharmacy',
        familyMember: 'Fam',
        note: 'CVS 888-333-2222',
        date: '02/01/2022',
      },
    ];
  }
}
