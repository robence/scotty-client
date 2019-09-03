import { Account } from '../../types/model';

export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';

export interface SelectAccountAction {
  type: typeof SELECT_ACCOUNT;
  account: Account;
}

export interface CreateAccountAction {
  type: typeof CREATE_ACCOUNT;
  account: Account;
}

export type AccountActionTypes = SelectAccountAction | CreateAccountAction;
