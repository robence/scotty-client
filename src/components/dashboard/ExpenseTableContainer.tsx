import React from 'react';
import Table from './TableComponent';
import { State } from '../../store/initialState';
import { useSelector } from 'react-redux';

import { columns } from './column-configurations/expense';
import { createExpenseDataSource } from './helpers/expense';

export default function Container() {
  const { tags, expenses, categories } = useSelector(
    ({ tags, expenses, categories }: State) => ({
      tags,
      expenses,
      categories,
    }),
  );

  const dataSource: any[] = createExpenseDataSource(expenses, categories, tags);

  return <Table columns={columns} dataSource={dataSource} />;
}
