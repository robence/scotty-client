import React from 'react';
import { List } from 'antd';
import CommonExpensesListItem from './CommonExpensesListItem';
import { ExpensePopulated } from '../../../types/model';

type CommonExpensesListProps = {
  dataSource: ExpensePopulated[];
  onClick: (item: ExpensePopulated) => () => void;
};

export default function CommonExpensesList({
  dataSource,
  onClick,
}: CommonExpensesListProps): JSX.Element {
  return (
    <List
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={(item): JSX.Element => (
        <List.Item>
          <CommonExpensesListItem item={item} onClick={onClick(item)} />
        </List.Item>
      )}
    />
  );
}
