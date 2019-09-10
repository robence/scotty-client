import {
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCESS,
  UserFetchRequestAction,
  UserFetchSuccessAction,
} from './types';
import { GetUserType } from '../../types/dto';

export function userStart(): UserFetchRequestAction {
  return { type: USER_FETCH_REQUESTED };
}

export function userSuccess(payload: GetUserType): UserFetchSuccessAction {
  return {
    type: USER_FETCH_SUCCESS,
    payload,
  };
}
