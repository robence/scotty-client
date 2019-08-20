import React, { ChangeEvent, SetStateAction, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import CreateExpenseFormComponent from './CreateExpenseFormComponent';
import { State } from '../../../store/initialState';
import * as expenseActionCreators from '../../../store/expense/actions';
import { RadioChangeEvent } from 'antd/lib/radio/interface';
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
  const { createExpense } = bindActionCreators(expenseActionCreators, dispatch);

  // TODO: handle similar form elements better
  const categoryOptions = Object.values(categories);
  const accountOptions = Object.values(accountList);
  const tagOptions = Object.values(tags);
  const radioOptions = [
    { id: '-', name: 'Expense' },
    { id: '+', name: 'Income' },
  ];

  const [categoryId, setCategory] = useState(categories[0].id);
  const [accountId, setAccount] = useState(selectedAccount.id);
  const [tagIds, setTags] = useState([] as number[]);
  const [radioId, setRadio] = useState(radioOptions[0].id);
  const [unsignedAmount, setAmount] = useState(0);

  const handleCategorySelect = (id: SetStateAction<string>) =>
    setCategory(Number(id));

  const handleAccountSelect = (id: SetStateAction<string>) =>
    setAccount(Number(id));

  const handleTagSelect = (newSelection: number[]) => setTags(newSelection);
  const handleRadioSelect = (e: RadioChangeEvent) => setRadio(e.target.value);

  // removes sign and extra space
  // input value is bound to the amount variable which is number
  const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value.slice(2)));
  };

  const handleSubmit = () => {
    const amount = radioId === '-' ? unsignedAmount * -1 : unsignedAmount;
    const newExpense = {
      id: genId(100),
      amount,
      categoryId,
      accountId,
      tagIds,
    };
    createExpense(newExpense);
  };

  const category = {
    selected: categoryId,
    options: categoryOptions,
    onChange: handleCategorySelect,
  };

  const account = {
    selected: accountId,
    options: accountOptions,
    onChange: handleAccountSelect,
  };

  const tag = {
    selected: tagIds,
    options: tagOptions,
    onChange: handleTagSelect,
  };

  const radio = {
    selected: radioId,
    options: radioOptions,
    onChange: handleRadioSelect,
  };

  return (
    <CreateExpenseFormComponent
      category={category}
      account={account}
      tag={tag}
      radio={radio}
      unsignedAmount={unsignedAmount}
      handleAmount={handleAmount}
      handleSubmit={handleSubmit}
    />
  );
}
