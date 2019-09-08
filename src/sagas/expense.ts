import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import { expenseSuccess } from '../store/expense/actions';
import { getExpenses } from '../api';
import { EXPENSE_FETCH_REQUESTED } from '../store/expense/types';

function* fetchExpenses() {
  try {
    const data = yield call(getExpenses);
    yield put(expenseSuccess(data));
  } catch (e) {
    yield call(message.error, 'Could not load expenses from server');
  }
}

export default function* expenseSaga() {
  yield takeLatest(EXPENSE_FETCH_REQUESTED, fetchExpenses);
}
