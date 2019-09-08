import {
  ExpenseActionTypes,
  CREATE_EXPENSE,
  EXPENSE_FETCH_SUCCESS,
  EXPENSE_FETCH_REQUESTED,
} from './types';
import { State } from '../initialState';
import objectify from '../../utils';
import { ExpenseList, Expense } from '../../types/model';

function getExpenses(expenses: Expense[]): ExpenseList {
  return objectify(
    expenses.map(({ createdAt, ...rest }) => ({
      ...rest,
      createdAt: new Date(createdAt),
    })),
  );
}

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
      return { ...state, expenses: getExpenses(action.payload.expenses) };
    default:
      return state;
  }
}
