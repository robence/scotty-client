import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import CreateExpenseFormComponent from './CreateExpenseFormComponent';
import { State } from '../../../store/initialState';
import * as expenseActionCreators from '../../../store/expense/actions';
import * as accountActionCreators from '../../../store/account/actions';
import { useRadio, useCategory, useTags, useAmount } from '../hooks';
import { ExpenseBase } from '../../../types/base';

export default function CreateExpenseFormContainer(): JSX.Element {
  const {
    userId,
    categories,
    tags,
    accountList,
    selectedAccount,
  } = useSelector((state: State) => state);

  const dispatch = useDispatch();
  const boundActionsCreators = bindActionCreators(
    { ...expenseActionCreators, ...accountActionCreators },
    dispatch,
  );

  const accountOptions = Object.values(accountList);
  const handleAccountSelect = (id: string): void => {
    boundActionsCreators.selectAccountStart(accountList[id]);
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

    const newExpense: ExpenseBase = {
      userId,
      amount: signedAmount,
      categoryId: category.selected,
      accountId: selectedAccount._id,
      tagIds,
      createdAt: new Date(),
    };
    boundActionsCreators.createExpenseStart(newExpense);
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
