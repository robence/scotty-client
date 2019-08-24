import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { Button, Input } from 'antd';
import {
  RadioGroupComponent,
  SingleSelectComponent,
  MultiSelectComponent,
} from '../../select';
import { FormElementProps } from '../../../types/form';
import { WithTitle } from '../../enhancer';
import { spaces } from '../../../consts';

type CreateExpenseFormProps = {
  category: FormElementProps;
  tag: FormElementProps;
  radio: FormElementProps;
  account: FormElementProps;
  amount: {
    unsignedAmount: number;
    handleAmount: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  handleSubmit: () => void;
};

export default function CreateExpenseComponent({
  category,
  tag,
  radio,
  account,
  handleSubmit,
  amount: { unsignedAmount, handleAmount },
}: CreateExpenseFormProps) {
  return (
    <Expense>
      <WithTitle title={'Amount'}>
        <RadioGroupComponent
          selected={radio.selected}
          options={radio.options}
          handleSelect={radio.onChange}
        />
      </WithTitle>

      <StyledInput
        value={`${radio.selected} ${unsignedAmount}`}
        onChange={handleAmount}
        placeholder="Enter amount"
      />

      <WithTitle title={'Category'}>
        <SingleSelectComponent props={category} />
      </WithTitle>

      <WithTitle title={'Tags'}>
        <MultiSelectComponent
          options={tag.options}
          selected={tag.selected}
          handleSelect={tag.onChange}
          placeholder="Select tags"
        />
      </WithTitle>

      <WithTitle title={'Account'}>
        <SingleSelectComponent props={account} />
      </WithTitle>

      <Button type="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Expense>
  );
}

const Expense = styled.div`
  display: flex;
  flex-direction: column;

  div + div,
  button {
    margin-top: ${spaces.m};
  }
`;

const StyledInput = styled(Input)`
  margin: ${spaces.s} 0;
`;
