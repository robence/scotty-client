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
import {
  groupCommonExpenses,
  groupCommonExpenseIdsByCount,
  sortExpenseIdsByCount,
} from './utils';

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

  const accountExpenses = filterExpensesByAccount(
    Object.values(expenses),
    selectedAccount.id,
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

  return (
    <CommonExpensesList dataSource={mostCommonExpenseList} onClick={onClick} />
  );
}
