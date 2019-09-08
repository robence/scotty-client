import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import CreateExpenseFormComponent from './CreateExpenseFormComponent';
import { State } from '../../../store/initialState';
import createExpense from '../../../store/expense/actions';
import * as accountActionCreators from '../../../store/account/actions';
import { useRadio, useCategory, useTags, useAmount } from '../hooks';
import { genId } from '../../../utils';
import { Expense } from '../../../types/model';

export default function CreateExpenseFormContainer(): JSX.Element {
  const { categories, tags, accountList, selectedAccount } = useSelector(
    (state: State) => state,
  );

  const dispatch = useDispatch();
  const boundActionsCreators = bindActionCreators(
    { createExpense, ...accountActionCreators },
    dispatch,
  );

  const accountOptions = Object.values(accountList);
  const handleAccountSelect = (id: string): void => {
    boundActionsCreators.selectAccount(accountList[id]);
  };

  const tag = useTags(tags);
  const radio = useRadio();
  const category = useCategory(categories);
  const amount = useAmount();

  const account = {
    selected: selectedAccount._id,
    options: accountOptions,
    onChange: handleAccountSelect,
  };

  const handleSubmit = (): void => {
    const tagIds = tag.selected.map((name: string) => tags.byNames[name]._id);
    const signedAmount =
      radio.selected === '-'
        ? amount.unsignedAmount * -1
        : amount.unsignedAmount;

    const newExpense: Expense = {
      _id: genId(100),
      amount: signedAmount,
      categoryId: category.selected,
      accountId: selectedAccount._id,
      tagIds,
      createdAt: new Date(),
    };
    boundActionsCreators.createExpense(newExpense);
  };

  return (
    <CreateExpenseFormComponent
      category={category}
      account={account}
      tag={tag}
      radio={radio}
      amount={amount}
      handleSubmit={handleSubmit}
    />
  );
}
