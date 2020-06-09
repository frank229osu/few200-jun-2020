import * as fromCounter from './counter.reducer';
import { ActionReducerMap } from '@ngrx/store';

// Create an interface that describes (for TypeScript) the application state.
export interface AppState {
  counter: fromCounter.CounterState;
}


export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
};
