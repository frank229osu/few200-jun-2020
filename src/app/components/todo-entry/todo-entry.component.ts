import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addItem(what: HTMLInputElement) {
    console.log(what.value);
    this.itemAdded.emit(what.value); // if there is something hooked to my @Output, let them know an item was added.
    what.value = '';
    what.focus(); // puts the cursor in it waiting for more stuff.
  }
}
