import { Account } from '../../types/model';
import { AccountCreateResponseDTO } from '../../api/dto';

export const ACCOUNT_SELECT_REQUESTED = 'ACCOUNT_SELECT_REQUESTED';
export const ACCOUNT_SELECT_SUCCESS = 'ACCOUNT_SELECT_SUCCESS';

export const ACCOUNT_CREATE_REQUESTED = 'ACCOUNT_CREATE_REQUESTED';
export const ACCOUNT_CREATE_SUCCESS = 'ACCOUNT_CREATE_SUCCESS';

export interface AccountSelectRequestAction {
  type: typeof ACCOUNT_SELECT_REQUESTED;
  account: Account;
}

export interface AccountSelectSuccessAction {
  type: typeof ACCOUNT_SELECT_SUCCESS;
  account: Account;
}

export interface AccountCreateRequestAction {
  type: typeof ACCOUNT_CREATE_REQUESTED;
  payload: { name: string };
}

export interface AccountCreateSuccessAction {
  type: typeof ACCOUNT_CREATE_SUCCESS;
  payload: AccountCreateResponseDTO;
}

export type AccountActionTypes =
  | AccountSelectRequestAction
  | AccountSelectSuccessAction
  | AccountCreateRequestAction
  | AccountCreateSuccessAction;
