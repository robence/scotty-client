import React, { SetStateAction } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

import EnterAmount from '../../input/amount/EnterAmountContainer';
import SingleSelectComponent from '../../select/SingleSelectComponent';
import MultiSelectComponent from '../../select/MultiSelectComponent';

import { WithTitle } from '../../enhancer';
import { spaces } from '../../../consts';

export type CreateExpenseFormProps = {
  categoryOptions: { id: number; name: string }[];
  selectedCategory: string;
  handleCategorySelect: (e: SetStateAction<string>) => void;

  accountOptions: { id: number; name: string }[];
  selectedAccount: string;
  handleAccountSelect: (e: SetStateAction<string>) => void;

  tagOptions: { id: number; name: string }[];
  // tagOptions: string[];

  selectedTags: any[];
  handleTagSelect: (e: any[]) => void;

  handleSubmit: () => void;
};

export default function CreateExpenseComponent({
  categoryOptions,
  selectedCategory,
  handleCategorySelect,
  accountOptions,
  selectedAccount,
  handleAccountSelect,
  tagOptions,
  selectedTags,
  handleTagSelect,
  handleSubmit,
}: CreateExpenseFormProps) {
  return (
    <Expense>
      <WithTitle title={'Amount'}>
        <EnterAmount />
      </WithTitle>

      <WithTitle title={'Category'}>
        <SingleSelectComponent
          options={categoryOptions}
          selected={selectedCategory}
          handleSelect={handleCategorySelect}
        />
      </WithTitle>

      <WithTitle title={'Tags'}>
        <MultiSelectComponent
          options={tagOptions}
          selected={selectedTags}
          handleSelect={handleTagSelect}
          placeholder="Select tags"
        />
      </WithTitle>

      <WithTitle title={'Account'}>
        <SingleSelectComponent
          options={accountOptions}
          selected={selectedAccount}
          handleSelect={handleAccountSelect}
        />
      </WithTitle>

      <Button type="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Expense>
  );
}

// TODO: check if this should be a form element
const Expense = styled.div`
  display: flex;
  flex-direction: column;

  div + div,
  button {
    margin-top: ${spaces.m};
  }
`;
