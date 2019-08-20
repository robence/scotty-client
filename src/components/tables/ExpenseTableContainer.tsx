import React from 'react';
import Table from './TableComponent';
import { State } from '../../store/initialState';
import { useSelector } from 'react-redux';
import { columns } from './column-configurations/expense';
import { createExpenseDataSource } from './helpers/expense';
import { filterExpensesByAccount } from './helpers/common';

export default function Container() {
  const { tags, expenses, categories, selectedAccount } = useSelector(
    ({ tags, expenses, categories, selectedAccount }: State) => ({
      tags,
      expenses,
      categories,
      selectedAccount,
    }),
  );

  const filteredExpenses = filterExpensesByAccount(
    Object.values(expenses),
    selectedAccount.id,
  );
  const dataSource = createExpenseDataSource(
    filteredExpenses,
    categories,
    tags,
  );

  return <Table columns={columns} dataSource={dataSource} />;
}
