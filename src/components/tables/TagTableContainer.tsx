import React from 'react';
import Table from './TableComponent';
import { State } from '../../store/initialState';
import { useSelector } from 'react-redux';
import { columns } from './column-configurations/tag';
import { groupExpensesByTag, createTagDataSource } from './helpers/tag';
import { filterExpenses } from './helpers/common';

export default function Container() {
  const { tags, expenses, selectedAccount, selectedPeriod } = useSelector(
    ({ tags, expenses, selectedAccount, selectedPeriod }: State) => ({
      tags,
      expenses,
      selectedAccount,
      selectedPeriod,
    }),
  );

  const filteredExpenses = filterExpenses(
    Object.values(expenses),
    selectedAccount.id,
    selectedPeriod.id,
  );

  const categorizedExpenses = groupExpensesByTag(
    Object.values(filteredExpenses),
  );
  
  const dataSource = createTagDataSource(categorizedExpenses, tags);

  return <Table columns={columns} dataSource={dataSource} />;
}
