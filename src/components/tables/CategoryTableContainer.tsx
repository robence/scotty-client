import React from 'react';
import { useSelector } from 'react-redux';
import Table from './TableComponent';
import { State } from '../../store/initialState';
import columns from './column-configurations/category';
import {
  groupExpensesByCategory,
  createCategoryDataSource,
} from './helpers/category';
import { filterExpenses } from './helpers/common';

export default function Container(): JSX.Element {
  const { categories, expenses, selectedAccount, selectedPeriod } = useSelector(
    (state: State) => state,
  );

  const filteredExpenses = filterExpenses(
    Object.values(expenses),
    selectedAccount._id,
    selectedPeriod._id,
  );

  const categorizedExpenses = groupExpensesByCategory(filteredExpenses);
  const dataSource = createCategoryDataSource(categorizedExpenses, categories);

  return <Table columns={columns} dataSource={dataSource} />;
}
