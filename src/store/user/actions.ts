import {
  USER_CREATE_REQUESTED,
  USER_CREATE_SUCCESS,
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCESS,
  UserCreateRequestAction,
  UserCreateSuccessAction,
  UserFetchRequestAction,
  UserFetchSuccessAction,
} from './types';
import { GetUserType, UserCreateResponseDTO } from '../../types/dto';
import { UserBase } from '../../types/base';

export function createUserStart(
  payload: UserBase & { password: string },
): UserCreateRequestAction {
  return {
    type: USER_CREATE_REQUESTED,
    payload,
  };
}

export function createUserSuccess(
  payload: UserCreateResponseDTO,
): UserCreateSuccessAction {
  return {
    type: USER_CREATE_SUCCESS,
    payload,
  };
}

export function userStart(): UserFetchRequestAction {
  return { type: USER_FETCH_REQUESTED };
}

export function userSuccess(payload: GetUserType): UserFetchSuccessAction {
  return {
    type: USER_FETCH_SUCCESS,
    payload,
  };
}
