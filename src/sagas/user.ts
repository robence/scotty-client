import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import {
  loginUserStart,
  loginUserSuccess,
  createUserStart,
  selectTokenStart,
  fetchUserStart,
  fetchUserSuccess,
  selectTokenSuccess,
} from '../store/user/actions';
import addTokenToHttpService, {
  loginUser,
  createUser,
  getUserByToken,
} from '../api';
import {
  USER_LOGIN_REQUESTED,
  USER_CREATE_REQUESTED,
  TOKEN_SELECT_REQUESTED,
  USER_FETCH_REQUESTED,
} from '../store/user/types';
import { expenseStart } from '../store/expense/actions';
import { categoryStart } from '../store/category/actions';

function* register({ payload }: ReturnType<typeof createUserStart>) {
  try {
    yield call(createUser, payload);
    yield call(message.info, 'User was successfully created', 10);
  } catch (e) {
    yield call(message.error, 'Something went wrong.');
  }
}

/**
 * After user logges in manually, token and user data are loaded into store.
 * Then categories and expenses are fetched from server.
 */
function* login({ payload }: ReturnType<typeof loginUserStart>) {
  try {
    const { token, user } = yield call(loginUser, payload);
    yield put(selectTokenStart({ token }));
    // yield put(fetchUserSuccess({ user }));
    yield call(message.info, 'User was successfully logged in', 10);
    yield put(expenseStart());
    yield put(categoryStart());
  } catch (e) {
    yield call(message.error, 'Something went wrong.', 10);
  }
}

/**
 * After token is found in local storage, it is loaded into the store.
 * Then user data is fetched. No manual login required.
 */
function* selectToken({ payload }: ReturnType<typeof selectTokenStart>) {
  try {
    yield put(selectTokenSuccess({ token: payload.token }));
    yield call(addTokenToHttpService, payload.token);
    yield put(fetchUserStart());
  } catch (e) {
    yield call(message.error, 'Something went wrong.');
  }
}

/**
 * After user is fetched, it is loaded into the store.
 * Then categories and expenses are fetched from server.
 */
function* fetchUser() {
  try {
    const data = yield call(getUserByToken);
    yield put(fetchUserSuccess(data));
    yield put(expenseStart());
    yield put(categoryStart());
  } catch (e) {
    yield call(message.error, 'Something went wrong.');
  }
}

export default function* userSaga() {
  yield takeLatest(USER_LOGIN_REQUESTED, login);
  yield takeLatest(USER_CREATE_REQUESTED, register);
  yield takeLatest(USER_FETCH_REQUESTED, fetchUser); // request is only sent from `selectToken`
  yield takeLatest(TOKEN_SELECT_REQUESTED, selectToken);
}
