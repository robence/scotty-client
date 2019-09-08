import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import { userSuccess } from '../store/user/actions';
import { getUser } from '../api';
import { USER_FETCH_REQUESTED } from '../store/user/types';

function* fetchUser() {
  try {
    const data = yield call(getUser);
    yield put(userSuccess(data));
  } catch (e) {
    yield call(message.error, 'Could not load user from server');
  }
}

export default function* userSaga() {
  yield takeLatest(USER_FETCH_REQUESTED, fetchUser);
}
