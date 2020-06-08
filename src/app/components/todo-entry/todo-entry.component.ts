import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addItem(what: HTMLInputElement) {
    console.log(what.value);
    // add it to the list?? (HOW!?)
    what.value = '';
    what.focus(); // puts the cursor in it waiting for more stuff.
  }
}
