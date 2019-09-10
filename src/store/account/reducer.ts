import {
  ACCOUNT_CREATE_SUCCESS,
  AccountActionTypes,
  ACCOUNT_SELECT_SUCCESS,
  ACCOUNT_SELECT_REQUESTED,
} from './types';
import { State } from '../initialState';

export default function accountReducer(
  state: State,
  action: AccountActionTypes,
): State {
  switch (action.type) {
    case ACCOUNT_SELECT_SUCCESS:
      return {
        ...state,
        selectedAccount: action.account,
      };
    case ACCOUNT_SELECT_REQUESTED:
      return state;
    case ACCOUNT_CREATE_SUCCESS:
      return {
        ...state,
        accountList: {
          ...state.accountList,
          [action.payload.account._id]: action.payload.account,
        },
      };
    default:
      return state;
  }
}
