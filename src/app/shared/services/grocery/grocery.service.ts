import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  groceries: any[];

  constructor() {}

  public getGroceries(): Observable<any> {
    this.groceries = [
      {
        count: 1,
        description: 'Miller Lite Beer',
        cost: 19.99,
        store: 'Walmart',
        pickedUp: true,
      },
      {
        count: 1,
        description: 'Chips',
        cost: 2.99,
        store: 'Walmart',
        pickedUp: true,
      },
      {
        count: 1,
        description: 'Hamburger Buns',
        cost: 1.99,
        store: 'Walmart',
        pickedUp: false,
      },
      {
        count: 2,
        description: 'TV Dinners',
        cost: 3.99,
        store: 'Walmart',
        pickedUp: false,
      },
      {
        count: 2,
        description: 'Brocolli',
        cost: 0.99,
        store: 'Walmart',
        pickedUp: false,
      },
      {
        count: 6,
        description: 'Corn',
        cost: 0.39,
        store: 'Walmart',
        pickedUp: false,
      },
      {
        count: 1,
        description: 'Eggs',
        cost: 3.49,
        store: 'Costco',
        pickedUp: true,
      },
      {
        count: 2,
        description: 'Bacon',
        cost: 8.99,
        store: 'Costco',
        pickedUp: false,
      },
      {
        count: 3,
        description: 'Wine',
        cost: 9.99,
        store: 'Target',
        pickedUp: false,
      },
      {
        count: 1,
        description: 'Pulled Pork',
        cost: 5.99,
        store: 'Target',
        pickedUp: false,
      },
    ];

    return of(this.groceries);
  }
}
