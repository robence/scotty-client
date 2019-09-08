import {
  CreateExpenseAction,
  ExpenseFetchRequestAction,
  ExpenseFetchSuccessAction,
  CREATE_EXPENSE,
  EXPENSE_FETCH_REQUESTED,
  EXPENSE_FETCH_SUCCESS,
} from './types';
import { Expense } from '../../types/model';
import { GetExpensesType } from '../../api';

export default function createExpense(expense: Expense): CreateExpenseAction {
  return {
    type: CREATE_EXPENSE,
    expense,
  };
}

export function expenseStart(userId: string): ExpenseFetchRequestAction {
  return { type: EXPENSE_FETCH_REQUESTED, userId };
}

export function expenseSuccess(
  payload: GetExpensesType,
): ExpenseFetchSuccessAction {
  return {
    type: EXPENSE_FETCH_SUCCESS,
    payload,
  };
}
