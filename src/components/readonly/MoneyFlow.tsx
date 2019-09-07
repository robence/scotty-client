import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store/initialState';
import { filterExpenses } from '../tables/helpers/common';
import sumExpenses from './utils';
import { Align } from '../ui';

export default function MoneyFlow(): JSX.Element {
  const { expenses, selectedAccount, selectedPeriod } = useSelector(
    (state: State) => state,
  );

  const accountExpenses = filterExpenses(
    Object.values(expenses),
    selectedAccount._id,
    selectedPeriod._id,
  );

  const moneyFlow = sumExpenses(accountExpenses);

  return (
    <Align>
      <h2>{`${moneyFlow} Ft`}</h2>
      <span>{selectedPeriod.name}</span>
    </Align>
  );
}
