import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import {
  userSuccess,
  createUserSuccess,
  createUserStart,
} from '../store/user/actions';
import { getUser, createUser } from '../api';
import {
  USER_FETCH_REQUESTED,
  USER_CREATE_REQUESTED,
} from '../store/user/types';

function* fetchUser() {
  try {
    const data = yield call(getUser);
    yield put(userSuccess(data));
    yield call(message.info, 'User was successfully created');
  } catch (e) {
    yield call(message.error, 'Could not load user from server');
  }
}

function* addUser(action: ReturnType<typeof createUserStart>) {
  try {
    const data = yield call(createUser, action.payload);
    yield put(createUserSuccess(data));
  } catch (e) {
    console.log('errors');
    console.log(e.errors);

    yield call(message.error, e.message, 10);
  }
}

export default function* userSaga() {
  yield takeLatest(USER_FETCH_REQUESTED, fetchUser);
  yield takeLatest(USER_CREATE_REQUESTED, addUser);
}
