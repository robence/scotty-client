import React from 'react';
import Table from './TableComponent';
import { State } from '../../store/initialState';
import { useSelector } from 'react-redux';
import { columns } from './column-configurations/category';
import {
  groupExpensesByCategory,
  createCategoryDataSource,
} from './helpers/category';
import { filterExpensesByAccount } from './helpers/common';

export default function Container() {
  const { categories, expenses, selectedAccount } = useSelector(
    ({ categories, expenses, selectedAccount }: State) => ({
      categories,
      expenses,
      selectedAccount,
    }),
  );

  const filteredExpenses = filterExpensesByAccount(
    Object.values(expenses),
    selectedAccount.id,
  );
  const categorizedExpenses = groupExpensesByCategory(filteredExpenses);
  const dataSource = createCategoryDataSource(categorizedExpenses, categories);

  return <Table columns={columns} dataSource={dataSource} />;
}
