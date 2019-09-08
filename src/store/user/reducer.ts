import {
  UserActionTypes,
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCESS,
} from './types';
import { State } from '../initialState';
import objectify from '../../utils';

export default function categoryReducer(
  state: State,
  action: UserActionTypes,
): State {
  switch (action.type) {
    case USER_FETCH_REQUESTED:
      return { ...state, loading: true };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        userId: action.payload.user._id,
        selectedAccount: action.payload.user.accounts[0],
        accountList: objectify(action.payload.user.accounts),
        tags: {
          byIds: objectify(action.payload.user.tags),
          byNames: objectify(action.payload.user.tags, 'name'),
        },
        loading: false,
      };
    default:
      return state;
  }
}
