import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import { createTagStart, createTagSuccess } from '../store/tag/actions';
import { createTag } from '../api';
import { TAG_CREATE_REQUESTED } from '../store/tag/types';
import text from '../i18n';

function* addTag(action: ReturnType<typeof createTagStart>) {
  try {
    const data = yield call(createTag, action.payload);
    yield put(createTagSuccess(data));
    yield call(
      message.success,
      `${text.sagas.tag.add.successBefore} ${data.tag.name} ${text.sagas.tag.add.successAfter}`,
    );
  } catch (e) {
    yield call(message.error, text.sagas.tag.add.error);
  }
}

export default function* tagSaga() {
  yield takeLatest(TAG_CREATE_REQUESTED, addTag);
}
