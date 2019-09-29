import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store/initialState';
import { filterExpenses } from '../tables/helpers/common';
import sumExpenses from './utils';
import { Align } from '../ui';
import { usePeriod } from '../../hooks';
import { Period } from '../../types/model';

export default function MoneyFlow(): JSX.Element {
  const { expenses, selectedAccount, selectedPeriodId } = useSelector(
    (state: State) => state,
  );

  const periodList = usePeriod();
  const selectedPeriod: Period = periodList[selectedPeriodId];

  const accountExpenses = filterExpenses(
    Object.values(expenses),
    selectedAccount._id,
    selectedPeriodId,
  );

  const moneyFlow = sumExpenses(accountExpenses);

  return (
    <Align>
      <h2>{`${moneyFlow} Ft`}</h2>
      <span>{selectedPeriod.name}</span>
    </Align>
  );
}
