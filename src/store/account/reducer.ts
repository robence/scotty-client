import { SELECT_ACCOUNT, CREATE_ACCOUNT, AccountActionTypes } from './types';
import { State } from '../initialState';

export function accountReducer(
  state: State,
  // { type, payload: { account } }: AccountActionTypes,
  action: AccountActionTypes,
) {
  switch (action.type) {
    case SELECT_ACCOUNT:
      return {
        ...state,
        selectedAccount: action.payload.account,
      };
    case CREATE_ACCOUNT:
      return {
        ...state,
        selectedAccount: action.payload.account,
        accountList: {
          ...state.accountList,
          [action.payload.account.id]: action.payload.account,
        },
      };
    default:
      return state;
  }
}
