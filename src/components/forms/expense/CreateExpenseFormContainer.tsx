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

  const categoryOptions = Object.values(categories);
  const accountOptions = Object.values(accountList);
  const tagOptions = Object.values(tags).map(({ name }) => name);

  // TODO: handle similar form elements better
  const [category, setCategory] = useState(categories[0]);
  const [account, setAccount] = useState(accountOptions[0]);

  const handleCategorySelect = (id: SetStateAction<string>) =>
    setCategory(categories[Number(id)]);

  const handleAccountSelect = (id: SetStateAction<string>) =>
    setAccount(accountList[Number(id)]);

  const [selectedTags, setTags] = useState([] as string[]);
  const filteredOptions = tagOptions.filter((o) => !selectedTags.includes(o));

  const handleTagSelect = (newSelection: string[]) => {
    setTags(newSelection);
  };

  const handleSubmit = () => {
    // TODO: check whether sending ids is sufficient

    const req = {
      category,
      account,
    };

    console.log('Sent');
    console.log(req);
  };

  return (
    <CreateExpenseFormComponent
      categoryOptions={categoryOptions}
      selectedCategory={category.name}
      handleCategorySelect={handleCategorySelect}
      accountOptions={accountOptions}
      selectedAccount={account.name}
      handleAccountSelect={handleAccountSelect}
      tagOptions={filteredOptions}
      selectedTags={selectedTags}
      handleTagSelect={handleTagSelect}
      handleSubmit={handleSubmit}
    />
  );
}
