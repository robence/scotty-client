import { useState } from 'react';
import { RadioChangeEvent } from 'antd/lib/radio/interface';
import { FormElementProps } from '../../../types/form';
import text from '../../../i18n';

export default function useRadio(): FormElementProps {
  const radioOptions = [
    { _id: '-', name: text.components.forms.expense.radio.minus },
    { _id: '+', name: text.components.forms.expense.radio.plus },
  ];
  const [radioId, setRadio] = useState('-');
  const handleRadioSelect = (e: RadioChangeEvent): void =>
    setRadio(e.target.value);

  return {
    selected: radioId,
    options: radioOptions,
    onChange: handleRadioSelect,
  };
}
