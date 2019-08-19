import React from 'react';
import { Expense } from '../../types/model';
import Table from './TableComponent';

import { State } from '../../store/initialState';
import { useSelector } from 'react-redux';

import { columns } from './column-configurations/tag';

import { groupExpensesByTag, createTagDataSource } from './helpers/tag';

export default function Container() {
  const { tags, expenses } = useSelector(({ tags, expenses }: State) => ({
    tags,
    expenses,
  }));

  const categorizedExpenses = groupExpensesByTag(Object.values(expenses));
  const dataSource = createTagDataSource(categorizedExpenses, tags);

  return <Table columns={columns} dataSource={dataSource} />;
}
