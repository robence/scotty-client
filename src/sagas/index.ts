import { all } from 'redux-saga/effects';
import categorySaga from './category';
import userSaga from './user';
import expenseSaga from './expense';

function* rootSaga() {
  yield all([categorySaga(), userSaga(), expenseSaga()]);
}

export default rootSaga;
