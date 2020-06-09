import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

// Export an interface for TypeScript
export interface CounterState {
  current: number;
}


const initialState: CounterState = {
  current: 0
};

// Reducer function
// (state, action): state
// have to be "pure" functions
// --- they can't change their arguments
// --- can't do things like API calls, etc.
const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (currentState) => ({ current: currentState.current + 1 })),
  on(actions.countDecremented, (currentState) => ({ current: currentState.current - 1 })),
  on(actions.countReset, () => initialState)
);


export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);
}





