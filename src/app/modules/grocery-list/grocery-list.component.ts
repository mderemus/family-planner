import {Component, OnInit} from '@angular/core';

import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {GroceryService} from '@/shared/services/grocery/grocery.service';
import {GroceryList, GroceryListItem} from '@/shared/models/grocery/grocery';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class GroceryListComponent implements OnInit {
  productDialog: boolean;
  groceries: any[] = [];
  groceryItem: GroceryListItem;
  selectedProducts: GroceryList[];
  submitted: boolean;
  statuses: any[];

  constructor(
    private productService: GroceryService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {}

  public ngOnInit(): void {
    this.loadGroceries();
  }

  loadGroceries() {
    this.groceries = [];
    this.groceries = [
      {
        count: 1,
        description: 'Miller Lite Beer',
        cost: 19.99,
        store: 'Walmart',
        pickedUp: false,
      },
      {
        count: 1,
        description: 'Chips',
        cost: 2.99,
        store: 'Walmart',
        pickedUp: false,
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
        pickedUp: false,
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
  }

  openNew() {
    this.groceryItem = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteProduct(product: GroceryListItem) {
    // this.confirmationService.confirm({
    //   message: 'Are you sure you want to delete ' + product.name + '?',
    //   header: 'Confirm',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.products = this.products.filter((val) => val.id !== product.id);
    //     this.product = {};
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Successful',
    //       detail: 'Product Deleted',
    //       life: 3000,
    //     });
    //   },
    // });
  }

  editProduct(product: GroceryListItem) {
    // this.product = {...product};
    // this.productDialog = true;
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    // if (this.product.name.trim()) {
    //   if (this.product.id) {
    //     this.products[this.findIndexById(this.product.id)] = this.product;
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Successful',
    //       detail: 'Product Updated',
    //       life: 3000,
    //     });
    //   } else {
    //     this.product.id = this.createId();
    //     this.product.image = 'product-placeholder.svg';
    //     this.products.push(this.product);
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Successful',
    //       detail: 'Product Created',
    //       life: 3000,
    //     });
    //   }

    //   this.products = [...this.products];
    //   this.productDialog = false;
    //   this.product = {};
    // }
  }

  // findIndexById(id: string): number {
  //   let index = -1;
  //   for (let i = 0; i < this.groceries.length; i++) {
  //     if (this.groceries[i].id === id) {
  //       index = i;
  //       break;
  //     }
  //   }

  //   return index;
  // }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
