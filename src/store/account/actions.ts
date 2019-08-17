import { CREATE_ACCOUNT, SELECT_ACCOUNT } from './types';
import { Account } from '../../types/model';

export const createAccount = (account: Account) => ({
  type: CREATE_ACCOUNT,
  payload: { account },
});

export const selectAccount = (account: Account) => ({
  type: SELECT_ACCOUNT,
  payload: { account },
});
