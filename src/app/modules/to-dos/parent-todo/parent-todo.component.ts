import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent-todo',
  templateUrl: './parent-todo.component.html',
  styleUrls: ['./parent-todo.component.scss'],
})
export class ParentTodoComponent implements OnInit {
  parentTodo: any[] = [];
  selectedTodo: any[];

  constructor() {}

  public ngOnInit(): void {
    this.loadGroceries();
  }

  loadGroceries() {
    this.parentTodo = [];
    this.parentTodo = [
      {
        priority: 1,
        description: 'Take out Trash',
        done: false,
      },
      {
        priority: 4,
        description: 'Clean Shed',
        done: true,
      },
      {
        priority: 3,
        description: 'Paint Fence',
        done: false,
      },
    ];
    this.selectedTodo = this.parentTodo.filter((x) => x.done === true);
  }
}
