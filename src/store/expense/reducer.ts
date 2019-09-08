import {
  ExpenseActionTypes,
  CREATE_EXPENSE,
  EXPENSE_FETCH_SUCCESS,
  EXPENSE_FETCH_REQUESTED,
} from './types';
import { State } from '../initialState';
import objectify from '../../utils';

export default function expenseReducer(
  state: State,
  action: ExpenseActionTypes,
): State {
  switch (action.type) {
    case CREATE_EXPENSE:
      return {
        ...state,
        expenses: {
          ...state.expenses,
          [action.expense._id]: action.expense,
        },
      };
    case EXPENSE_FETCH_REQUESTED:
      return { ...state, loading: true };
    case EXPENSE_FETCH_SUCCESS:
      return { ...state, expenses: objectify(action.payload.expenses) };
    default:
      return state;
  }
}
