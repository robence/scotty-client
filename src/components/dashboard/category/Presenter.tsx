import React from 'react';
import Card from '../../ui/Card';
import WithHeading from '../../enhancer/WithHeading';
import { Table } from 'antd';
import { DashboardType } from '../../../types/model';

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
export default function PresenterComponent({
  expenses,
  categories,
}: DashboardType) {
  const yzr: { [categoryId: number]: number } = expenses.reduce(
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

  const zyx = Object.entries(yzr).map(([categoryId, amount]) => {
    const category = categories.find(c => c.id === Number(categoryId));
    return {
      amount,
      key: categoryId,
      category: category ? category.name : '',
    };
  });

  return (
    <Card>
      <div>
        <WithHeading title={'Expenses by category'} />
        <Table size="small" columns={columns} dataSource={zyx} />
      </div>
    </Card>
  );
}
