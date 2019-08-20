import { CREATE_EXPENSE, ExpenseActionTypes } from './types';
import { State } from '../initialState';

export function expenseReducer(
  state: State,
  { type, expense }: ExpenseActionTypes,
) {
  switch (type) {
    case CREATE_EXPENSE:
      return {
        ...state,
        expenses: {
          ...state.expenses,
          [expense.id]: expense,
        },
      };
    default:
      return state;
  }
}
