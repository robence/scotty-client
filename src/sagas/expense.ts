import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import {
  expenseSuccess,
  expenseStart,
  createExpenseStart,
  createExpenseSuccess,
} from '../store/expense/actions';
import { getExpenses, createExpense } from '../api';
import {
  EXPENSE_FETCH_REQUESTED,
  EXPENSE_CREATE_REQUESTED,
} from '../store/expense/types';
import text from '../i18n';

function* fetchExpenses(action: ReturnType<typeof expenseStart>) {
  try {
    const data = yield call(getExpenses, action.userId);
    yield put(expenseSuccess(data));
  } catch (e) {
    yield call(message.error, text.sagas.expense.fetch.error);
  }
}

function* addExpense(action: ReturnType<typeof createExpenseStart>) {
  try {
    const data = yield call(createExpense, action.payload);
    yield put(createExpenseSuccess(data));
    yield call(message.success, text.sagas.expense.add.success);
  } catch (e) {
    yield call(message.error, text.sagas.expense.add.error);
  }
}
export default function* expenseSaga() {
  yield takeLatest(EXPENSE_FETCH_REQUESTED, fetchExpenses);
  yield takeLatest(EXPENSE_CREATE_REQUESTED, addExpense);
}
