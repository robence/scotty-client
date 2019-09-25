import {
  AccountSelectRequestAction,
  AccountSelectSuccessAction,
  AccountCreateRequestAction,
  AccountCreateSuccessAction,
  ACCOUNT_SELECT_REQUESTED,
  ACCOUNT_SELECT_SUCCESS,
  ACCOUNT_CREATE_REQUESTED,
  ACCOUNT_CREATE_SUCCESS,
} from './types';
import { Account } from '../../types/model';
import { AccountCreateResponseDTO } from '../../api/dto';

export const selectAccountStart = (
  account: Account,
): AccountSelectRequestAction => ({
  type: ACCOUNT_SELECT_REQUESTED,
  account,
});

export const selectAccountSuccess = (
  account: Account,
): AccountSelectSuccessAction => ({
  type: ACCOUNT_SELECT_SUCCESS,
  account,
});

export function createAccountStart(payload: {
  name: string;
}): AccountCreateRequestAction {
  return { type: ACCOUNT_CREATE_REQUESTED, payload };
}

export function createAccountSuccess(
  payload: AccountCreateResponseDTO,
): AccountCreateSuccessAction {
  return {
    type: ACCOUNT_CREATE_SUCCESS,
    payload,
  };
}
