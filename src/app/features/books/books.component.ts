import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BooksState, selectBookListItems } from './reducers';
import { Observable } from 'rxjs';
import { BooksListItem } from './models';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<BooksListItem[]>;
  constructor(private store: Store<BooksState>) { }

  ngOnInit(): void {
    this.books$ = this.store.pipe(
      select(selectBookListItems)
    );
  }

}
