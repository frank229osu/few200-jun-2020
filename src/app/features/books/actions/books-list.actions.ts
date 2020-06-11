import { createAction, props } from '@ngrx/store';
import { BookEntity } from '../reducers/books-list.reducer';

let id = 0;

export const addBook = createAction(
  '[books books-list] added a book',
  ({ title, author, format }: { title: string, author: string, format: string }) => ({
    payload: {
      id: 'T' + id++,
      title, author, format,
      onLoan: false
    }
  })
);


export const loanBook = createAction(
  '[books books-list] loan book',
  props<{ payload: BookEntity }>()
);

export const returnBook = createAction(
  '[books books-list] return book',
  props<{ payload: BookEntity }>()
);
