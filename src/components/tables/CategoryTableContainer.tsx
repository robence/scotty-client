import React from 'react';
import Table from './TableComponent';
import { State } from '../../store/initialState';
import { useSelector } from 'react-redux';
import { columns } from './column-configurations/category';
import {
  groupExpensesByCategory,
  createCategoryDataSource,
} from './helpers/category';

export default function Container() {
  const { categories, expenses } = useSelector(
    ({ categories, expenses }: State) => ({
      categories,
      expenses,
    }),
  );

  const categorizedExpenses = groupExpensesByCategory(expenses);
  const dataSource = createCategoryDataSource(categorizedExpenses, categories);

  return <Table columns={columns} dataSource={dataSource} />;
}
