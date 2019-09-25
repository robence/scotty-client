import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import {
  createAccountStart,
  createAccountSuccess,
  selectAccountStart,
  selectAccountSuccess,
} from '../store/account/actions';
import { createAccount } from '../api';
import {
  ACCOUNT_CREATE_REQUESTED,
  ACCOUNT_SELECT_REQUESTED,
} from '../store/account/types';

function* addAccount(action: ReturnType<typeof createAccountStart>) {
  try {
    const data = yield call(createAccount, action.payload);
    yield put(createAccountSuccess(data));
    yield call(
      message.success,
      `Account ${data.account.name} was successfully created.`,
    );
  } catch (e) {
    yield call(message.error, 'Could not load accounts from server');
  }
}

function* selectAccount(action: ReturnType<typeof selectAccountStart>) {
  try {
    yield put(selectAccountSuccess(action.account));
    yield call(
      message.success,
      `${action.account.name} is now the default account.`,
    );
  } catch (e) {
    yield call(message.error, 'Could not select accounts');
  }
}

export default function* accountSaga() {
  yield takeLatest(ACCOUNT_CREATE_REQUESTED, addAccount);
  yield takeLatest(ACCOUNT_SELECT_REQUESTED, selectAccount);
}
