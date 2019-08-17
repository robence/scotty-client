// import { combineReducers } from 'redux';
import { accountReducer } from './account/reducer';
import initialState, { State } from './initialState';
import { AccountActionTypes } from './account/types';

const reducers = [accountReducer];

// the reducer is called whenever a dispatch action is made.
// the action.type is a string which maps to a function in Actions.
// We apply the update to existing state, and return a new copy of state.
const rootReducer = (state: State = initialState, action: AccountActionTypes): State => {
  const update = reducers.reduce(
    (previousState, reducer) => reducer(previousState, action),
    state,
  );
  return { ...state, ...update };
};

export default rootReducer;
