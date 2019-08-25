import React from 'react';
import CommonExpensesList from './CommonExpensesList';
import { State } from '../../../store/initialState';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ExpensePopulated } from '../../../types/model';
import { filterExpensesByAccount } from '../../tables/helpers/common';
import * as expenseActionCreators from '../../../store/expense/actions';
import { genId } from '../../../utils';
import { Expense } from '../../../types/model';

type ExpensesByCount = {
  [id: string]: { count: number; expense: Partial<Expense> };
};

const groupExpensesByCount = (expenses: Expense[]): ExpensesByCount =>
  expenses.reduce(
    (
      groupedExpenses: ExpensesByCount,
      { amount, categoryId, tagIds }: Expense,
    ) => {
      const id = `${categoryId}-${amount}-${tagIds.join(',')}`;

      return {
        ...groupedExpenses,
        [id]: {
          count:
            groupedExpenses[id] && groupedExpenses[id].count
              ? groupedExpenses[id].count + 1
              : 1,
          expense: {
            amount,
            categoryId,
            tagIds,
          },
        },
      };
    },
    {},
  );

export default function CommonExpensesListContainer() {
  const { expenses, categories, tags, selectedAccount } = useSelector(
    ({ expenses, categories, tags, selectedAccount }: State) => ({
      expenses,
      categories,
      tags,
      selectedAccount,
    }),
  );

  const dispatch = useDispatch();
  const { createExpense } = bindActionCreators(expenseActionCreators, dispatch);

  // TODO: get most common expenses

  const expensesByCount = groupExpensesByCount(Object.values(expenses));

  console.log('expensesByCount');
  console.log(expensesByCount);

  const dataSource: ExpensePopulated[] = filterExpensesByAccount(
    Object.values(expenses),
    selectedAccount.id,
  )
    .slice(0, 5)
    .map(({ amount, categoryId, tagIds }) => {
      const category = categories[categoryId];
      const tagList = tagIds.map((tagId) => tags.byIds[tagId]);

      return { amount, category, tags: tagList };
    });

  const onClick = (item: ExpensePopulated) => () => {
    const expense: Expense = {
      id: genId(20),
      amount: item.amount,
      categoryId: item.category.id,
      tagIds: item.tags.map(({ id }) => id),
      accountId: selectedAccount.id,
      createdTs: new Date(),
    };

    createExpense(expense);
  };

  return <CommonExpensesList dataSource={dataSource} onClick={onClick} />;
}
