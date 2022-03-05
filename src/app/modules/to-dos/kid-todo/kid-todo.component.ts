import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kid-todo',
  templateUrl: './kid-todo.component.html',
  styleUrls: ['./kid-todo.component.scss'],
})
export class KidTodoComponent implements OnInit {
  kidTodo: any[] = [];
  selectedTodo: any[];

  constructor() {}

  public ngOnInit(): void {
    this.loadTodo();
  }

  loadTodo() {
    this.kidTodo = [];
    this.kidTodo = [
      {
        priority: 3,
        description: 'Clean Room',
        done: false,
      },
      {
        priority: 1,
        description: 'Homework',
        done: true,
      },
      {
        priority: 2,
        description: 'Put away toys',
        done: false,
      },
    ];
    this.selectedTodo = this.kidTodo.filter((x) => x.done === true);
  }
}
