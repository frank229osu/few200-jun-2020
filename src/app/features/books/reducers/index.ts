import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export const featureName = 'books';
import * as fromBooksList from './books-list.reducer';
import { BooksListItem } from '../models';
export interface BooksState {
  booksList: fromBooksList.BooksListState;
}

export const reducers: ActionReducerMap<BooksState> = {
  booksList: fromBooksList.reducer
};


// 1. Feature Reducer
const selectBooksFeature = createFeatureSelector<BooksState>(featureName);


// 2. Per Branch

const selectBooksListBranch = createSelector(
  selectBooksFeature,
  f => f.booksList
);

// 3. Helpers

const { selectAll: selectAllBookEntityArray } = fromBooksList.adapter.getSelectors(selectBooksListBranch);


// 4. For the components

export const selectBookListItems = createSelector(
  selectAllBookEntityArray,
  books => books as BooksListItem[]
);
