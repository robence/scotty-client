import { GetUserType } from '../../types/dto';

export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';

export interface UserFetchRequestAction {
  type: typeof USER_FETCH_REQUESTED;
}

export interface UserFetchSuccessAction {
  type: typeof USER_FETCH_SUCCESS;
  payload: GetUserType;
}

export type UserActionTypes = UserFetchRequestAction | UserFetchSuccessAction;
