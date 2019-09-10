import { Expense } from '../../types/model';
import { GetExpensesType } from '../../types/dto';

export const CREATE_EXPENSE = 'CREATE_EXPENSE';
export const EXPENSE_FETCH_REQUESTED = 'EXPENSE_FETCH_REQUESTED';
export const EXPENSE_FETCH_SUCCESS = 'EXPENSE_FETCH_SUCCESS';

export interface CreateExpenseAction {
  type: typeof CREATE_EXPENSE;
  expense: Expense;
}

export interface ExpenseFetchRequestAction {
  type: typeof EXPENSE_FETCH_REQUESTED;
  userId: string;
}

export interface ExpenseFetchSuccessAction {
  type: typeof EXPENSE_FETCH_SUCCESS;
  payload: GetExpensesType;
}

export type ExpenseActionTypes =
  | CreateExpenseAction
  | ExpenseFetchRequestAction
  | ExpenseFetchSuccessAction;
