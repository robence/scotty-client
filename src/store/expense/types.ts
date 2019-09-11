import { GetExpensesType, ExpenseCreateResponseDTO } from '../../types/dto';
import { ExpensePost } from '../../types/model';

export const EXPENSE_CREATE_REQUESTED = 'EXPENSE_CREATE_REQUESTED';
export const EXPENSE_CREATE_SUCCESS = 'EXPENSE_CREATE_SUCCESS';
export const EXPENSE_FETCH_REQUESTED = 'EXPENSE_FETCH_REQUESTED';
export const EXPENSE_FETCH_SUCCESS = 'EXPENSE_FETCH_SUCCESS';

export interface ExpenseFetchRequestAction {
  type: typeof EXPENSE_FETCH_REQUESTED;
  userId: string;
}

export interface ExpenseCreateRequestAction {
  type: typeof EXPENSE_CREATE_REQUESTED;
  payload: ExpensePost;
}

export interface ExpenseCreateSuccessAction {
  type: typeof EXPENSE_CREATE_SUCCESS;
  payload: ExpenseCreateResponseDTO;
}
export interface ExpenseFetchSuccessAction {
  type: typeof EXPENSE_FETCH_SUCCESS;
  payload: GetExpensesType;
}

export type ExpenseActionTypes =
  | ExpenseCreateRequestAction
  | ExpenseCreateSuccessAction
  | ExpenseFetchRequestAction
  | ExpenseFetchSuccessAction;
