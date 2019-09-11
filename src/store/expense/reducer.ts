import {
  ExpenseActionTypes,
  EXPENSE_CREATE_REQUESTED,
  EXPENSE_CREATE_SUCCESS,
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
    case EXPENSE_CREATE_REQUESTED:
      return { ...state, loading: true };
    case EXPENSE_CREATE_SUCCESS:
      return {
        ...state,
        expenses: {
          ...state.expenses,
          [action.payload.expense._id]: action.payload.expense,
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
