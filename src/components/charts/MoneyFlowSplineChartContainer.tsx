import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store/initialState';
import MoneyFlowSplineChartComponent from './MoneyFlowSplineChartComponent';
import { periods } from '../../consts';
import { filterExpenses } from '../tables/helpers/common';
import sumExpenses from '../readonly/utils';

export default function MoneyFlowSplineChartContainer(): JSX.Element {
  const { expenses, selectedAccount } = useSelector((state: State) => state);

  const now = new Date();

  const GetMoneyFlowForPeriod = (index: number): number => {
    if (index > 4 || index < 0) return 0;

    const a = filterExpenses(
      Object.values(expenses),
      selectedAccount._id,
      periods.DAY_IN_MINUTES * (4 - index),
      // (WEEK_IN_MINUTES * (4 - index)).toString(),
      true,
    );

    return sumExpenses(a);
  };

  const data2 = !expenses
    ? []
    : Array(5)
        .fill(null)
        .map((_, id) => {
          const lastDate = new Date(now);
          // lastDate.setMinutes(lastDate.getMinutes() - WEEK_IN_MINUTES);
          lastDate.setMinutes(
            lastDate.getMinutes() - periods.DAY_IN_MINUTES * (4 - id),
          );
          const lastDateString = lastDate.toLocaleDateString('hu-hu');

          const xyz = GetMoneyFlowForPeriod(id);

          return {
            name: lastDateString,
            amount: xyz,
          };
        });

  return <MoneyFlowSplineChartComponent data={data2} />;
}
