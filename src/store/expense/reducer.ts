import CREATE_EXPENSE, { ExpenseActionTypes } from './types';
import { State } from '../initialState';

export default function expenseReducer(
  state: State,
  { type, expense }: ExpenseActionTypes,
): State {
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
