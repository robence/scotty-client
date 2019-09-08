import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommonExpensesList from './CommonExpensesList';
import { State } from '../../../store/initialState';
import { ExpensePopulated, Expense } from '../../../types/model';
import { filterExpensesByAccount } from '../../tables/helpers/common';
import createExpense from '../../../store/expense/actions';
import { genId } from '../../../utils';

import {
  groupCommonExpenses,
  groupCommonExpenseIdsByCount,
  sortExpenseIdsByCount,
} from './utils';

export default function CommonExpensesListContainer(): JSX.Element {
  const { expenses, categories, tags, selectedAccount } = useSelector(
    (state: State) => state,
  );

  const dispatch = useDispatch();
  const boundCreateExpense = bindActionCreators(createExpense, dispatch);

  const accountExpenses = filterExpensesByAccount(
    Object.values(expenses),
    selectedAccount._id,
  );

  const groupedExpenses = groupCommonExpenses(accountExpenses);
  const expenseIdsByCount = groupCommonExpenseIdsByCount(groupedExpenses);
  const sortedExpenseIdsByMostCommon = sortExpenseIdsByCount(expenseIdsByCount);
  const mostCommonExpenseList: ExpensePopulated[] = sortedExpenseIdsByMostCommon
    .slice(0, 5)
    .map((id) => groupedExpenses[id].expense)
    .map(({ amount, categoryId, tagIds }) => {
      const category = categories[categoryId];
      const tagList = tagIds.map((tagId) => tags.byIds[tagId]);

      return { amount, category, tags: tagList };
    });

  const onClick = (item: ExpensePopulated) => (): void => {
    const expense: Expense = {
      _id: genId(20),
      amount: item.amount,
      categoryId: item.category._id,
      tagIds: item.tags.map(({ _id }) => _id),
      accountId: selectedAccount._id,
      createdAt: new Date(),
    };

    boundCreateExpense(expense);
  };

  return (
    <CommonExpensesList dataSource={mostCommonExpenseList} onClick={onClick} />
  );
}
