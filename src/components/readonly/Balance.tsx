import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store/initialState';
import { filterExpensesByAccount } from '../tables/helpers/common';
import { sumExpenses } from './utils';

export default function Balance() {
  const { expenses, selectedAccount } = useSelector(
    ({ expenses, selectedAccount }: State) => ({
      expenses,
      selectedAccount,
    }),
  );

  const accountExpenses = filterExpensesByAccount(
    Object.values(expenses),
    selectedAccount.id,
  );

  const balance = sumExpenses(accountExpenses);

  return <h1>{`${balance} Ft`}</h1>;
}
