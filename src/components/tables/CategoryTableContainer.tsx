import React from 'react';
import Table from './TableComponent';
import { State } from '../../store/initialState';
import { useSelector } from 'react-redux';
import { columns } from './column-configurations/category';
import {
  groupExpensesByCategory,
  createCategoryDataSource,
} from './helpers/category';
import { filterExpenses } from './helpers/common';

export default function Container() {
  const { categories, expenses, selectedAccount, selectedPeriod } = useSelector(
    ({ categories, expenses, selectedAccount, selectedPeriod }: State) => ({
      categories,
      expenses,
      selectedAccount, selectedPeriod
    }),
  );

  const filteredExpenses = filterExpenses(
    Object.values(expenses),
    selectedAccount.id,
    selectedPeriod.id,
  );

  const categorizedExpenses = groupExpensesByCategory(filteredExpenses);
  const dataSource = createCategoryDataSource(categorizedExpenses, categories);

  return <Table columns={columns} dataSource={dataSource} />;
}
