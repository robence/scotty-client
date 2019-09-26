import {
  USER_CREATE_REQUESTED,
  USER_LOGIN_REQUESTED,
  USER_LOGIN_SUCCESS,
  UserCreateRequestAction,
  UserLoginRequestAction,
  UserLoginSuccessAction,
  UserFetchRequestAction,
  USER_FETCH_REQUESTED,
  UserFetchSuccessAction,
  USER_FETCH_SUCCESS,
  TokenSelectRequestAction,
  TokenSelectSuccessAction,
  TOKEN_SELECT_REQUESTED,
  TOKEN_SELECT_SUCCESS,
  TOKEN_REMOVE_REQUESTED,
  TokenRemoveRequestAction,
} from './types';
import {
  UserLoginResponseDTO,
  UserCreateRequestDTO,
  UserLoginRequestDTO,
  UserFetchResponseDTO,
} from '../../api/dto';
import { Token } from '../../types/base';

export function createUserStart(
  payload: UserCreateRequestDTO,
): UserCreateRequestAction {
  return { type: USER_CREATE_REQUESTED, payload };
}

export function loginUserStart(
  payload: UserLoginRequestDTO,
): UserLoginRequestAction {
  return { type: USER_LOGIN_REQUESTED, payload };
}

export function loginUserSuccess(
  payload: UserLoginResponseDTO,
): UserLoginSuccessAction {
  return { type: USER_LOGIN_SUCCESS, payload };
}

export function fetchUserStart(): UserFetchRequestAction {
  return { type: USER_FETCH_REQUESTED };
}

export function fetchUserSuccess(
  payload: UserFetchResponseDTO,
): UserFetchSuccessAction {
  return { type: USER_FETCH_SUCCESS, payload };
}

export function selectTokenStart(payload: Token): TokenSelectRequestAction {
  return { type: TOKEN_SELECT_REQUESTED, payload };
}

export function selectTokenSuccess(payload: Token): TokenSelectSuccessAction {
  return { type: TOKEN_SELECT_SUCCESS, payload };
}

export function removeTokenStart(): TokenRemoveRequestAction {
  return { type: TOKEN_REMOVE_REQUESTED };
}
