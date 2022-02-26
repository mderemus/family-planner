import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GroceryListComponent} from './grocery-list.component';
import {GroceryListRoutingModule} from './grocery-list-routing.module';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    GroceryListRoutingModule,
    TableModule,
    ToastModule,
    ToolbarModule,
  ],
  declarations: [GroceryListComponent],
})
export class GroceryListModule {}
