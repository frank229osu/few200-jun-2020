import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/books-list.actions';
export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface BooksListState extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

// const initialState = adapter.getInitialState();
const initialState: BooksListState = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      title: 'High Weirdness',
      author: 'Erik Davis',
      format: 'HardCover'
    },
    2: {
      id: '2',
      title: 'Walden',
      author: 'Thoreau',
      format: 'SoftCover'
    }
  }
};

const reducerFunction = createReducer(
  initialState,
  on(actions.addBook, (s, a) => adapter.addOne(a.payload, s))
);

export function reducer(state: BooksListState = initialState, action: Action) {
  return reducerFunction(state, action);
}



