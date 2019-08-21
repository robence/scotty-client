import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store/initialState';
import { filterExpenses } from '../tables/helpers/common';
import { sumExpenses } from './utils';
import { Align } from '../ui';

export default function MoneyFlow() {
  const { expenses, selectedAccount, selectedPeriod } = useSelector(
    ({ expenses, selectedAccount, selectedPeriod }: State) => ({
      expenses,
      selectedAccount,
      selectedPeriod,
    }),
  );

  const accountExpenses = filterExpenses(
    Object.values(expenses),
    selectedAccount.id,
    selectedPeriod.id,
  );

  const moneyFlow = sumExpenses(accountExpenses);

  return (
    <Align>
      <h2>{`${moneyFlow} Ft`}</h2>
      <span>{selectedPeriod.name}</span>
    </Align>
  );
}
