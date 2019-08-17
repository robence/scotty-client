import React from 'react';
import { Expense } from '../../types/model';
import { Table } from 'antd';

import { State } from '../../store/initialState';
import { useSelector } from 'react-redux';

const columns = [
  {
    title: 'Tag',
    dataIndex: 'tag',
    key: 'tag',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
];

const groupExpensesByTag = (expenses: Expense[]): { [key: number]: number } => {
  return expenses.reduce(
    (memo: { [tagId: number]: number }, { tagIds, amount }: Expense) => {
      return tagIds.reduce(
        (groupedExpenses: { [tagId: number]: number }, tagId: number) => {
          return {
            ...groupedExpenses,
            [tagId]: groupedExpenses[tagId]
              ? groupedExpenses[tagId] + amount
              : amount,
          };
        },
        memo,
      );
    },
    {},
  );
};

export default function Container() {
  const { tags, expenses } = useSelector(({ tags, expenses }: State) => ({
    tags,
    expenses,
  }));

  const categorizedExpenses = groupExpensesByTag(expenses);

  const dataSource = Object.entries(categorizedExpenses).map(
    ([tagId, amount]) => {
      const tag = tags.find((c) => c.id === Number(tagId));
      return {
        amount,
        key: Number(tagId),
        tag: tag ? tag.name : '',
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
