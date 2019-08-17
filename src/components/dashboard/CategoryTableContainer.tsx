import React from 'react';
import { Expense } from '../../types/model';
import { Table } from 'antd';
import { State } from '../../store/initialState';
import { useSelector } from 'react-redux';

const columns = [
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
];

const groupExpensesByCategory = (
  expenses: Expense[],
): { [key: number]: number } => {
  return expenses.reduce(
    (
      memo: { [categoryId: number]: number },
      { amount, categoryId }: { amount: number; categoryId: number },
    ) => {
      return {
        ...memo,
        [categoryId]: memo[categoryId] ? memo[categoryId] + amount : amount,
      };
    },
    {},
  );
};

export default function Container() {
  const { categories, expenses } = useSelector(
    ({ categories, expenses }: State) => ({ categories, expenses }),
  );

  const categorizedExpenses = groupExpensesByCategory(expenses);

  const dataSource = Object.entries(categorizedExpenses).map(
    ([categoryId, amount]) => {
      const category = categories.find((c) => c.id === Number(categoryId));
      return {
        amount,
        key: Number(categoryId),
        category: category ? category.name : '',
      };
    },
  );

  return (
    <Table
      size="small"
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 240 }}
    />
  );
}
