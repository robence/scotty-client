import React from 'react';
import { useSelector } from 'react-redux';
import Table from './TableComponent';
import { State } from '../../store/initialState';
import columns from './column-configurations/tag';
import { groupExpensesByTag, createTagDataSource } from './helpers/tag';
import { filterExpenses } from './helpers/common';

export default function Container(): JSX.Element {
  const { tags, expenses, selectedAccount, selectedPeriod } = useSelector(
    (state: State) => state,
  );

  const filteredExpenses = filterExpenses(
    Object.values(expenses),
    selectedAccount._id,
    selectedPeriod._id,
  );

  const categorizedExpenses = groupExpensesByTag(
    Object.values(filteredExpenses),
  );

  const dataSource = createTagDataSource(categorizedExpenses, tags);

  return <Table columns={columns} dataSource={dataSource} />;
}
