import React from 'react';
import { useSelector } from 'react-redux';
import Table from './TableComponent';
import { State } from '../../store/initialState';
import columns from './column-configurations/expense';
import createExpenseDataSource from './helpers/expense';
import { filterExpenses } from './helpers/common';

export default function Container(): JSX.Element {
  const {
    tags,
    expenses,
    categories,
    selectedAccount,
    selectedPeriod,
  } = useSelector((state: State) => state);

  const filteredExpenses = filterExpenses(
    Object.values(expenses),
    selectedAccount.id,
    selectedPeriod.id,
  );

  const dataSource = createExpenseDataSource(
    filteredExpenses,
    categories,
    tags,
  );

  return <Table columns={columns} dataSource={dataSource} />;
}
