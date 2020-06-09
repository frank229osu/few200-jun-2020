import { Action } from '@ngrx/store';
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
export function reducer(state: CounterState = initialState, action: Action): CounterState {
  switch (action.type) {
    case 'increment': {
      return {
        current: state.current + 1
      };
    }
    case 'decrement': {
      return {
        current: state.current - 1
      };
    }
    case 'reset': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}





