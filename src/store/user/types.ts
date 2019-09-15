import { GetUserType, UserCreateResponseDTO } from '../../types/dto';
import { UserBase } from '../../types/base';

export const USER_CREATE_REQUESTED = 'USER_CREATE_REQUESTED';
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS';
export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';

export interface UserCreateRequestAction {
  type: typeof USER_CREATE_REQUESTED;
  payload: UserBase & { password: string };
}

export interface UserCreateSuccessAction {
  type: typeof USER_CREATE_SUCCESS;
  payload: UserCreateResponseDTO;
}
export interface UserFetchRequestAction {
  type: typeof USER_FETCH_REQUESTED;
}

export interface UserFetchSuccessAction {
  type: typeof USER_FETCH_SUCCESS;
  payload: GetUserType;
}

export type UserActionTypes =
  | UserCreateRequestAction
  | UserCreateSuccessAction
  | UserFetchRequestAction
  | UserFetchSuccessAction;
