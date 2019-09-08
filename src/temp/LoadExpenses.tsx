import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store/initialState';
import { expenseStart } from '../store/expense/actions';

export default function LoadInitialState(): JSX.Element {
  const { userId, expenses } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const boundExpenseStart = bindActionCreators(expenseStart, dispatch);

  useEffect(() => {
    if (userId && !Object.entries(expenses).length) {
      boundExpenseStart(userId);
    }
  }, [expenses, boundExpenseStart]);

  return <></>;
}
