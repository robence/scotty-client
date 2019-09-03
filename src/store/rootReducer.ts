import initialState, { State } from './initialState';

import accountReducer from './account/reducer';
import tagReducer from './tag/reducer';
import expenseReducer from './expense/reducer';
import periodReducer from './period/reducer';

const reducers = [accountReducer, tagReducer, expenseReducer, periodReducer];

// the reducer is called whenever a dispatch action is made.
// the action.type is a string which maps to a function in Actions.
// We apply the update to existing state, and return a new copy of state.
const rootReducer = (state: State = initialState, action: any): State => {
  const update = reducers.reduce(
    (previousState, reducer) => reducer(previousState, action),
    state,
  );
  return { ...state, ...update };
};

export default rootReducer;
