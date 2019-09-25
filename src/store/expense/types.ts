import {
  ExpenseCreateResponseDTO,
  ExpenseFetchResponseDTO,
} from '../../api/dto';
import { ExpenseBase } from '../../types/base';

export const EXPENSE_CREATE_REQUESTED = 'EXPENSE_CREATE_REQUESTED';
export const EXPENSE_CREATE_SUCCESS = 'EXPENSE_CREATE_SUCCESS';
export const EXPENSE_FETCH_REQUESTED = 'EXPENSE_FETCH_REQUESTED';
export const EXPENSE_FETCH_SUCCESS = 'EXPENSE_FETCH_SUCCESS';

export interface ExpenseFetchRequestAction {
  type: typeof EXPENSE_FETCH_REQUESTED;
}

export interface ExpenseCreateRequestAction {
  type: typeof EXPENSE_CREATE_REQUESTED;
  payload: ExpenseBase;
}

export interface ExpenseCreateSuccessAction {
  type: typeof EXPENSE_CREATE_SUCCESS;
  payload: ExpenseCreateResponseDTO;
}
export interface ExpenseFetchSuccessAction {
  type: typeof EXPENSE_FETCH_SUCCESS;
  payload: ExpenseFetchResponseDTO;
}

export type ExpenseActionTypes =
  | ExpenseCreateRequestAction
  | ExpenseCreateSuccessAction
  | ExpenseFetchRequestAction
  | ExpenseFetchSuccessAction;
