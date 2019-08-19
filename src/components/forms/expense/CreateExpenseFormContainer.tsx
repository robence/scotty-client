import React, { SetStateAction, useState } from 'react';
import { useSelector } from 'react-redux';
import CreateExpenseFormComponent from './CreateExpenseFormComponent';
import { State } from '../../../store/initialState';

export default function CreateExpenseFormContainer() {
  const { categories, tags, accountList } = useSelector(
    ({ accountList, categories, tags }: State) => ({
      categories,
      tags,
      accountList,
    }),
  );

  // TODO: handle similar form elements better

  const categoryOptions = Object.values(categories);
  const accountOptions = Object.values(accountList);
  const tagOptions = Object.values(tags);

  const [categoryId, setCategory] = useState(categories[0].id);
  const [accountId, setAccount] = useState(accountOptions[0].id);
  const [tagIds, setTags] = useState([] as number[]);

  const handleCategorySelect = (id: SetStateAction<string>) =>
    setCategory(Number(id));

  const handleAccountSelect = (id: SetStateAction<string>) =>
    setAccount(Number(id));

  const handleTagSelect = (newSelection: any[]) => {
    console.log('newSelection');
    console.log(typeof newSelection[0]);
    console.log(newSelection);

    setTags(newSelection);
  };

  const handleSubmit = () => {
    const newExpense = {
      categoryId,
      accountId,
      tagIds,
    };

    console.log('Sent');
    console.log(newExpense);
  };

  return (
    <CreateExpenseFormComponent
      categoryOptions={categoryOptions}
      selectedCategory={categories[categoryId].name}
      handleCategorySelect={handleCategorySelect}
      accountOptions={accountOptions}
      selectedAccount={accountList[accountId].name}
      handleAccountSelect={handleAccountSelect}
      tagOptions={tagOptions}
      selectedTags={tagIds}
      handleTagSelect={handleTagSelect}
      handleSubmit={handleSubmit}
    />
  );
}
