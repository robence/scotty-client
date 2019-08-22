import React from 'react';
import { List } from 'antd';
import CommonExpensesListItem from './CommonExpensesListItem';
import { ExpenseAsStringType } from '../../../types/model';

type CommonExpensesListProps = {
  dataSource: ExpenseAsStringType[];
  onClick: () => void;
};

export default function CommonExpensesList({
  dataSource,
  onClick,
}: CommonExpensesListProps) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item>
          <CommonExpensesListItem item={item} onClick={onClick} />
        </List.Item>
      )}
    />
  );
}
