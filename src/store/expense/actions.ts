import {
  ExpenseCreateRequestAction,
  ExpenseCreateSuccessAction,
  EXPENSE_CREATE_REQUESTED,
  EXPENSE_CREATE_SUCCESS,
  ExpenseFetchRequestAction,
  ExpenseFetchSuccessAction,
  EXPENSE_FETCH_REQUESTED,
  EXPENSE_FETCH_SUCCESS,
} from './types';
import { GetExpensesType, ExpenseCreateResponseDTO } from '../../types/dto';
import { ExpenseBase } from '../../types/base';

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

export function createExpenseStart(
  payload: ExpenseBase,
): ExpenseCreateRequestAction {
  return { type: EXPENSE_CREATE_REQUESTED, payload };
}

export function createExpenseSuccess(
  payload: ExpenseCreateResponseDTO,
): ExpenseCreateSuccessAction {
  return {
    type: EXPENSE_CREATE_SUCCESS,
    payload,
  };
}
