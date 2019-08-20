import React from 'react';
import Table from './TableComponent';
import { State } from '../../store/initialState';
import { useSelector } from 'react-redux';
import { columns } from './column-configurations/tag';
import { groupExpensesByTag, createTagDataSource } from './helpers/tag';
import { filterExpensesByAccount } from './helpers/common';

export default function Container() {
  const { tags, expenses, selectedAccount } = useSelector(
    ({ tags, expenses, selectedAccount }: State) => ({
      tags,
      expenses,
      selectedAccount,
    }),
  );

  const filteredExpenses = filterExpensesByAccount(
    Object.values(expenses),
    selectedAccount.id,
  );

  const categorizedExpenses = groupExpensesByTag(
    Object.values(filteredExpenses),
  );
  const dataSource = createTagDataSource(categorizedExpenses, tags);

  return <Table columns={columns} dataSource={dataSource} />;
}
