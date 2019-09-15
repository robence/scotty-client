import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import text from '../i18n';
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
      `${text.sagas.account.add.successBefore} ${data.account.name} ${text.sagas.account.add.successBefore}`,
    );
  } catch (e) {
    yield call(message.error, text.sagas.account.add.error);
  }
}

function* selectAccountAsync(action: ReturnType<typeof selectAccountStart>) {
  try {
    yield put(selectAccountSuccess(action.account));
    yield call(
      message.success,
      `${action.account.name} ${text.sagas.account.select.success}`,
    );
  } catch (e) {
    yield call(message.error, text.sagas.account.select.error);
  }
}

export default function* accountSaga() {
  yield takeLatest(ACCOUNT_CREATE_REQUESTED, addAccount);
  yield takeLatest(ACCOUNT_SELECT_REQUESTED, selectAccountAsync);
}
