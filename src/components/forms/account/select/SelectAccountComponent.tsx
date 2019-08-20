import React from 'react';
import { FormElementProps } from '../../../../types/form';
import { SingleSelectComponent } from '../../../select';

type CreateAndSelectAccountProps = {
  account: FormElementProps;
};

export default function SelectAccountComponent({
  account,
}: CreateAndSelectAccountProps) {
  return (
    <SingleSelectComponent
      options={account.options}
      selected={account.selected}
      handleSelect={account.onChange}
    />
  );
}
