import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: TodoListItem[] = [
    { description: 'Coffee', completed: false },
    { description: 'Mystic Momma Beer', completed: false }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  markComplete(item: TodoListItem) {
    item.completed = true;
  }
}
