import {
  UserActionTypes,
  USER_CREATE_REQUESTED,
  USER_LOGIN_REQUESTED,
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCESS,
  TOKEN_SELECT_SUCCESS,
  TOKEN_REMOVE_REQUESTED,
} from './types';
import { State } from '../initialState';
import objectify from '../../utils';
import { User } from '../../types/model';

function getUserProps(user: User): Partial<State> {
  return {
    userId: user._id,
    selectedAccount: user.accounts[0],
    accountList: objectify(user.accounts),
    tags: {
      byIds: objectify(user.tags),
      byNames: objectify(user.tags, 'name'),
    },
  };
}

export default function userReducer(
  state: State,
  action: UserActionTypes,
): State {
  switch (action.type) {
    case USER_CREATE_REQUESTED:
      return { ...state, loading: true };
    case USER_LOGIN_REQUESTED:
      return { ...state, loading: true };
    case TOKEN_SELECT_SUCCESS:
      return { ...state, token: action.payload.token };
    case TOKEN_REMOVE_REQUESTED:
      return { ...state, token: '', userId: '' };
    case USER_FETCH_REQUESTED:
      return { ...state, loading: true };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        ...getUserProps(action.payload.user),
        loading: false,
      };
    default:
      return state;
  }
}
