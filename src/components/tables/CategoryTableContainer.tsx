import React from 'react';
import { useSelector } from 'react-redux';
import Table from './TableComponent';
import { State } from '../../store/initialState';
import getColumns from './column-configurations/category';
import {
  groupExpensesByCategory,
  createCategoryDataSource,
} from './helpers/category';
import { filterExpenses } from './helpers/common';
import { useLang } from '../../hooks';

export default function Container(): JSX.Element {
  const {
    categories,
    expenses,
    selectedAccount,
    selectedPeriodId,
  } = useSelector((state: State) => state);

  const text = useLang();

  const filteredExpenses = filterExpenses(
    Object.values(expenses),
    selectedAccount._id,
    selectedPeriodId,
  );

  const categorizedExpenses = groupExpensesByCategory(filteredExpenses);
  const dataSource = createCategoryDataSource(categorizedExpenses, categories);

  return <Table columns={getColumns(text)} dataSource={dataSource} />;
}
