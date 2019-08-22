import React from 'react';
import CommonExpensesList from './CommonExpensesList';
import { State } from '../../../store/initialState';
import { useSelector } from 'react-redux';
import { ExpenseAsStringType } from '../../../types/model';

export default function CommonExpensesListContainer() {
  const { expenses, categories, tags } = useSelector(
    ({ expenses, categories, tags }: State) => ({ expenses, categories, tags }),
  );

  const dataSource: ExpenseAsStringType[] = Object.values(expenses)
    .slice(0, 5)
    .map(
      ({ amount, categoryId, tagIds }): ExpenseAsStringType => {
        const categoryName = categories[categoryId].name;
        const tagNames = tagIds.map((tagId) => tags.byIds[tagId].name);

        return { amount, categoryName, tagNames };
      },
    );

  const onClick = () => {
    console.log('Item added');
  };

  return <CommonExpensesList dataSource={dataSource} onClick={onClick} />;
}
