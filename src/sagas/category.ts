import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import { categorySuccess } from '../store/category/actions';
import { getCategories } from '../api';
import { CATEGORY_FETCH_REQUESTED } from '../store/category/types';

function* fetchCategories() {
  try {
    const data = yield call(getCategories);
    yield put(categorySuccess(data));
  } catch (e) {
    yield call(message.error, 'Could not load categories from server');
  }
}

export default function* categorySaga() {
  yield takeLatest(CATEGORY_FETCH_REQUESTED, fetchCategories);
}
