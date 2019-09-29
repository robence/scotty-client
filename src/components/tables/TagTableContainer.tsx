import React from 'react';
import { useSelector } from 'react-redux';
import Table from './TableComponent';
import { State } from '../../store/initialState';
import getColumns from './column-configurations/tag';
import { groupExpensesByTag, createTagDataSource } from './helpers/tag';
import { filterExpenses } from './helpers/common';
import { useLang } from '../../hooks';

export default function Container(): JSX.Element {
  const { tags, expenses, selectedAccount, selectedPeriodId } = useSelector(
    (state: State) => state,
  );

  const text = useLang();

  const filteredExpenses = filterExpenses(
    Object.values(expenses),
    selectedAccount._id,
    selectedPeriodId,
  );

  const categorizedExpenses = groupExpensesByTag(
    Object.values(filteredExpenses),
  );

  const dataSource = createTagDataSource(categorizedExpenses, tags);

  return <Table columns={getColumns(text)} dataSource={dataSource} />;
}
