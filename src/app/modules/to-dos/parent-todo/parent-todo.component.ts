import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent-todo',
  templateUrl: './parent-todo.component.html',
  styleUrls: ['./parent-todo.component.scss'],
})
export class ParentTodoComponent implements OnInit {
  parentTodo: any[] = [];

  constructor() {}

  public ngOnInit(): void {
    this.loadGroceries();
  }

  loadGroceries() {
    this.parentTodo = [];
    this.parentTodo = [
      {
        priority: 1,
        description: 'Miller Lite Beer',
        done: false,
      },
      {
        priority: 4,
        description: 'Clean Shed',
        done: false,
      },
      {
        priority: 3,
        description: 'Paint Fence',
        done: false,
      },
    ];
  }
}
