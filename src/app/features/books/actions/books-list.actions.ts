import { createAction } from '@ngrx/store';

let id = 0;

export const addBook = createAction(
  '[books books-list] added a book',
  ({ title, author, format }: { title: string, author: string, format: string }) => ({
    payload: {
      id: 'T' + id++,
      title, author, format
    }
  })
);
