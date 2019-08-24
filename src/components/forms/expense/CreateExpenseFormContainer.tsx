import React, { ChangeEvent, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import CreateExpenseFormComponent from './CreateExpenseFormComponent';
import { State } from '../../../store/initialState';
import * as expenseActionCreators from '../../../store/expense/actions';
import * as accountActionCreators from '../../../store/account/actions';
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
  const { createExpense, selectAccount } = bindActionCreators(
    { ...expenseActionCreators, ...accountActionCreators },
    dispatch,
  );

  const [categoryId, setCategory] = useState(categories[0].id);
  const [tagNames, setTagNames] = useState([] as string[]);
  const [radioId, setRadio] = useState('-');
  const [unsignedAmount, setAmount] = useState(0);

  const categoryOptions = Object.values(categories);
  const accountOptions = Object.values(accountList);
  const tagOptions = Object.values(tags.byIds);
  const filteredTagOptions = tagOptions.filter(
    ({ name }) => !tagNames.includes(name),
  );

  const radioOptions = [
    { id: '-', name: 'Expense' },
    { id: '+', name: 'Income' },
  ];

  const handleCategorySelect = (id: number) => setCategory(id);
  const handleAccountSelect = (id: number) => selectAccount(accountList[id]);
  const handleTagSelect = (newSelection: string[]) => setTagNames(newSelection);
  const handleRadioSelect = (e: RadioChangeEvent) => setRadio(e.target.value);

  // removes sign and extra space
  // input value is bound to the amount variable which is number
  const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const input = Number(e.target.value.slice(2));
    if (!Number.isNaN(input)) setAmount(Number(e.target.value.slice(2)));
  };

  const handleSubmit = () => {
    const amount = radioId === '-' ? unsignedAmount * -1 : unsignedAmount;
    const tagIds = tagNames.map((name) => tags.byNames[name].id);

    const newExpense = {
      id: genId(100),
      amount,
      categoryId,
      accountId: selectedAccount.id,
      tagIds,
      createdTs: new Date(),
    };
    createExpense(newExpense);
  };

  const category = {
    selected: categoryId,
    options: categoryOptions,
    onChange: handleCategorySelect,
  };

  const account = {
    selected: selectedAccount.id,
    options: accountOptions,
    onChange: handleAccountSelect,
  };

  const tag = {
    selected: tagNames,
    options: filteredTagOptions,
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
