import { all } from 'redux-saga/effects';
import categorySaga from './category';
import userSaga from './user';

function* rootSaga() {
  yield all([categorySaga(), userSaga()]);
}

export default rootSaga;
