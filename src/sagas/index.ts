import { all } from 'redux-saga/effects';
import categorySaga from './category';
import userSaga from './user';
import expenseSaga from './expense';
import tagSaga from './tag';
import accountSaga from './account';

function* rootSaga() {
  yield all([
    categorySaga(),
    userSaga(),
    expenseSaga(),
    tagSaga(),
    accountSaga(),
  ]);
}

export default rootSaga;
