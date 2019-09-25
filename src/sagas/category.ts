import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import { categorySuccess } from '../store/category/actions';
import { getCategories } from '../api';
import { CATEGORY_FETCH_REQUESTED } from '../store/category/types';
import text from '../i18n';

function* fetchCategories() {
  try {
    const data = yield call(getCategories);
    yield put(categorySuccess(data));
  } catch (e) {
    yield call(message.error, text.sagas.category.fetch.error);
  }
}

export default function* categorySaga() {
  yield takeLatest(CATEGORY_FETCH_REQUESTED, fetchCategories);
}
