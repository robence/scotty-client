import React from 'react';
import { useSelector } from 'react-redux';
import Table from './TableComponent';
import { State } from '../../store/initialState';
import getColumns from './column-configurations/expense';
import createExpenseDataSource, { ExpenseDataItem } from './helpers/expense';
import { filterExpenses } from './helpers/common';
import { useLang } from '../../hooks';

export default function Container(): JSX.Element {
  const {
    tags,
    expenses,
    categories,
    selectedAccount,
    selectedPeriodId,
  } = useSelector((state: State) => state);

  const text = useLang();

  const filteredExpenses = filterExpenses(
    Object.values(expenses),
    selectedAccount._id,
    selectedPeriodId,
  );

  const dataSource: ExpenseDataItem[] = createExpenseDataSource(
    filteredExpenses,
    categories,
    tags,
  )
    .sort((a: ExpenseDataItem, b: ExpenseDataItem) =>
      a.created.localeCompare(b.created),
    )
    .reverse();

  return <Table columns={getColumns(text)} dataSource={dataSource} />;
}
