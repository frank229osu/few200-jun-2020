import { Component, OnInit, Input } from '@angular/core';
import { BooksListItem } from '../../models';
import { Store } from '@ngrx/store';
import { BooksState } from '../../reducers';
import * as actions from '../../actions/books-list.actions';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() books: BooksListItem[] = [];
  constructor(private store: Store<BooksState>) { }

  ngOnInit(): void {
  }

  loan(book: BooksListItem) {
    this.store.dispatch(actions.loanBook({ payload: book }));
  }
  return(book: BooksListItem) {
    this.store.dispatch(actions.returnBook({ payload: book }));
  }
}
