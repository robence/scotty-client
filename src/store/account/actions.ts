import {
  CREATE_ACCOUNT,
  SELECT_ACCOUNT,
  SelectAccountAction,
  CreateAccountAction,
} from './types';
import { Account } from '../../types/model';

export const createAccount = (account: Account): CreateAccountAction => ({
  type: CREATE_ACCOUNT,
  account,
});

export const selectAccount = (account: Account): SelectAccountAction => ({
  type: SELECT_ACCOUNT,
  account,
});
