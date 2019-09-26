import {
  UserCreateRequestDTO,
  UserLoginRequestDTO,
  UserLoginResponseDTO,
  UserFetchResponseDTO,
} from '../../api/dto';
import { Token } from '../../types/base';

export const USER_CREATE_REQUESTED = 'USER_CREATE_REQUESTED';
export const USER_LOGIN_REQUESTED = 'USER_LOGIN_REQUESTED';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
export const TOKEN_SELECT_REQUESTED = 'TOKEN_SELECT_REQUESTED';
export const TOKEN_SELECT_SUCCESS = 'TOKEN_SELECT_SUCCESS';
export const TOKEN_REMOVE_REQUESTED = 'TOKEN_REMOVE_REQUESTED';

export interface UserCreateRequestAction {
  type: typeof USER_CREATE_REQUESTED;
  payload: UserCreateRequestDTO;
}

export interface UserLoginRequestAction {
  type: typeof USER_LOGIN_REQUESTED;
  payload: UserLoginRequestDTO;
}

export interface UserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS;
  payload: UserLoginResponseDTO;
}

export interface UserFetchRequestAction {
  type: typeof USER_FETCH_REQUESTED;
}

export interface UserFetchSuccessAction {
  type: typeof USER_FETCH_SUCCESS;
  payload: UserFetchResponseDTO;
}

export interface TokenSelectRequestAction {
  type: typeof TOKEN_SELECT_REQUESTED;
  payload: Token;
}

export interface TokenSelectSuccessAction {
  type: typeof TOKEN_SELECT_SUCCESS;
  payload: Token;
}

export interface TokenRemoveRequestAction {
  type: typeof TOKEN_REMOVE_REQUESTED;
}

export type UserActionTypes =
  | UserCreateRequestAction
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserFetchRequestAction
  | UserFetchSuccessAction
  | TokenSelectRequestAction
  | TokenSelectSuccessAction
  | TokenRemoveRequestAction;
