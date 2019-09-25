import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import { createTagStart, createTagSuccess } from '../store/tag/actions';
import { createTag } from '../api';
import { TAG_CREATE_REQUESTED } from '../store/tag/types';

function* addTag({ payload }: ReturnType<typeof createTagStart>) {
  try {
    const data = yield call(createTag, payload);
    yield put(createTagSuccess(data));
    yield call(
      message.success,
      `Tag ${data.tag.name} was successfully created.`,
    );
  } catch (e) {
    yield call(message.error, 'Could not load tags from server');
  }
}

export default function* tagSaga() {
  yield takeLatest(TAG_CREATE_REQUESTED, addTag);
}
