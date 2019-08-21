import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store/initialState';
import { filterExpensesByAccount, filterExpensesByPeriod } from '../tables/helpers/common';
import { sumExpenses } from './utils';

export default function MoneyFlow() {
  const { expenses, selectedAccount, selectedPeriod } = useSelector(
    ({ expenses, selectedAccount, selectedPeriod }: State) => ({
      expenses,
      selectedAccount, selectedPeriod
    }),
  );

  const accountExpenses = filterExpensesByAccount(
    Object.values(expenses),
    selectedAccount.id,
  );

  const balance = sumExpenses(accountExpenses);

  return <h1>{`${balance} Ft`}</h1>;
}
