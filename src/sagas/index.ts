import { all } from 'redux-saga/effects';
import categorySaga from './category';

function* rootSaga() {
  yield all([categorySaga()]);
}

export default rootSaga;
