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

function* fetchExpenses(action: ReturnType<typeof expenseStart>) {
  try {
    const data = yield call(getExpenses, action.userId);
    yield put(expenseSuccess(data));
  } catch (e) {
    yield call(message.error, 'Could not load expenses from server');
  }
}

function* addExpense(action: ReturnType<typeof createExpenseStart>) {
  try {
    const data = yield call(createExpense, action.payload);
    yield put(createExpenseSuccess(data));
    yield call(message.success, `Transaction was successfully created.`);
  } catch (e) {
    yield call(message.error, 'Could not save transaction.');
  }
}
export default function* expenseSaga() {
  yield takeLatest(EXPENSE_FETCH_REQUESTED, fetchExpenses);
  yield takeLatest(EXPENSE_CREATE_REQUESTED, addExpense);
}
