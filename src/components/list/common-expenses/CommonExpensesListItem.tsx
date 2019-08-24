import React from 'react';
import { Button } from 'antd';
import { Align } from '../../ui';
import { ExpensePopulated } from '../../../types/model';
import Expense from '../../readonly/Expense';

export default function CommonExpensesList({
  item,
  onClick,
}: {
  item: ExpensePopulated;
  onClick: () => void;
}) {
  return (
    <Align>
      <Expense item={item}></Expense>
      <Button color="blue" onClick={onClick}>
        Add
      </Button>
    </Align>
  );
}
