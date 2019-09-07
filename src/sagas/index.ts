import { call, put, takeLatest } from 'redux-saga/effects';
// import Api from '...';

import { categorySuccess } from '../store/category/actions';
import getCategories from '../api';
import { CATEGORY_FETCH_REQUESTED } from '../store/category/types';
import { Category } from '../types/model';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchCategories(): Generator {
  try {
    // const user = yield call(Api.fetchUser, action.payload.userId);
    const categories = yield call(getCategories);
    yield put(categorySuccess((categories as unknown) as Category[]));
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
    console.log(e);
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeLatest(CATEGORY_FETCH_REQUESTED, fetchCategories);
}

// function* rootSaga() {
//   yield all([mySaga()]);
// }

export default mySaga;
