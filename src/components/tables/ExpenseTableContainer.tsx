import React from 'react';
import Table from './TableComponent';
import { State } from '../../store/initialState';
import { useSelector } from 'react-redux';
import { columns } from './column-configurations/expense';
import { createExpenseDataSource } from './helpers/expense';
import {
  filterExpensesByAccount,
  filterExpensesByPeriod,
} from './helpers/common';

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

  const filteredExpensesByAccount = filterExpensesByAccount(
    Object.values(expenses),
    selectedAccount.id,
  );

  const startPeriod = new Date();
  startPeriod.setMinutes(startPeriod.getMinutes() - selectedPeriod.id);

  const filteredExpensesByPeriod =
    selectedPeriod.id === -1
      ? filteredExpensesByAccount
      : filterExpensesByPeriod(filteredExpensesByAccount, startPeriod);

  const dataSource = createExpenseDataSource(
    filteredExpensesByPeriod,
    categories,
    tags,
  );

  console.log('rerender');
  console.log('selectedPeriod');
  console.log(selectedPeriod);
  console.log(filteredExpensesByPeriod);

  return <Table columns={columns} dataSource={dataSource} />;
}
