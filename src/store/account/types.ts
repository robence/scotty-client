export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';

interface SelectAccountAction {
  type: typeof SELECT_ACCOUNT;
  payload: { account: Account };
}

interface CreateAccountAction {
  type: typeof CREATE_ACCOUNT;
  payload: { account: Account };
}

export type AccountActionTypes = SelectAccountAction | CreateAccountAction;
