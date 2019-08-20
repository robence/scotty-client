import React from 'react';
import { FormElementProps } from '../../../types/form';
import { SingleSelectComponent } from '../../select';

type CreateAndSelectAccountProps = {
  period: FormElementProps;
};

export default function SelectPeriodComponent({
  period,
}: CreateAndSelectAccountProps) {
  return (
    <SingleSelectComponent
      options={period.options}
      selected={period.selected}
      handleSelect={period.onChange}
    />
  );
}
