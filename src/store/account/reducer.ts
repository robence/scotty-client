import { SELECT_ACCOUNT, CREATE_ACCOUNT, AccountActionTypes } from './types';
import { State } from '../initialState';

export function accountReducer(
  state: State,
  { type, account }: AccountActionTypes,
) {
  switch (type) {
    case SELECT_ACCOUNT:
      return {
        ...state,
        selectedAccount: account,
      };
    case CREATE_ACCOUNT:
      return {
        ...state,
        selectedAccount: account,
        accountList: {
          ...state.accountList,
          [account.id]: account,
        },
      };
    default:
      return state;
  }
}
