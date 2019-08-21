import React from 'react';
import Table from './TableComponent';
import { State } from '../../store/initialState';
import { useSelector } from 'react-redux';
import { columns } from './column-configurations/expense';
import { createExpenseDataSource } from './helpers/expense';
import { filterExpenses } from './helpers/common';

export default function Container() {
  const {
    tags,
    expenses,
    categories,
    selectedAccount,
    selectedPeriod,
  } = useSelector(
    ({
      tags,
      expenses,
      categories,
      selectedAccount,
      selectedPeriod,
    }: State) => ({
      tags,
      expenses,
      categories,
      selectedAccount,
      selectedPeriod,
    }),
  );

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
