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
import text from '../../../i18n';

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
}: CreateExpenseFormProps): JSX.Element {
  return (
    <Expense>
      <WithTitle title={text.components.forms.expense.amount.title}>
        <RadioGroupComponent
          selected={radio.selected}
          options={radio.options}
          handleSelect={radio.onChange}
        />
      </WithTitle>

      <StyledInput
        value={`${radio.selected} ${unsignedAmount}`}
        onChange={handleAmount}
        placeholder={text.components.forms.expense.amount.placeholder}
      />

      <WithTitle title={text.components.forms.expense.category.title}>
        <SingleSelectComponent props={category} />
      </WithTitle>

      <WithTitle title={text.components.forms.expense.tag.title}>
        <MultiSelectComponent
          options={tag.options}
          selected={tag.selected}
          handleSelect={tag.onChange}
          placeholder={text.components.forms.expense.tag.placeholder}
        />
      </WithTitle>

      <WithTitle title={text.components.forms.expense.account.title}>
        <SingleSelectComponent props={account} />
      </WithTitle>

      <Button type="primary" onClick={handleSubmit}>
        {text.components.forms.expense.create}
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
