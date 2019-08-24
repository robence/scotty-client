import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import CreateExpenseFormComponent from './CreateExpenseFormComponent';
import { State } from '../../../store/initialState';
import * as expenseActionCreators from '../../../store/expense/actions';
import * as accountActionCreators from '../../../store/account/actions';
import { useRadio, useCategory, useTags, useAmount } from '../hooks';
import { genId } from '../../../utils';

export default function CreateExpenseFormContainer() {
  const { categories, tags, accountList, selectedAccount } = useSelector(
    ({ accountList, categories, tags, selectedAccount }: State) => ({
      categories,
      tags,
      accountList,
      selectedAccount,
    }),
  );

  const dispatch = useDispatch();
  const { createExpense, selectAccount } = bindActionCreators(
    { ...expenseActionCreators, ...accountActionCreators },
    dispatch,
  );

  const accountOptions = Object.values(accountList);
  const handleAccountSelect = (id: number) => selectAccount(accountList[id]);

  const tag = useTags(tags);
  const radio = useRadio();
  const category = useCategory(categories);
  const amount = useAmount();

  const account = {
    selected: selectedAccount.id,
    options: accountOptions,
    onChange: handleAccountSelect,
  };

  const handleSubmit = () => {
    const tagIds = tag.selected.map((name: string) => tags.byNames[name].id);
    const signedAmount =
      radio.selected === '-'
        ? amount.unsignedAmount * -1
        : amount.unsignedAmount;

    const newExpense = {
      id: genId(100),
      amount: signedAmount,
      categoryId: category.selected,
      accountId: selectedAccount.id,
      tagIds,
      createdTs: new Date(),
    };
    createExpense(newExpense);
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
