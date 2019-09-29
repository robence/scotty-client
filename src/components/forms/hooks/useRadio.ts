import { useState } from 'react';
import { RadioChangeEvent } from 'antd/lib/radio/interface';
import { FormElementProps } from '../../../types/form';
import { useLang } from '../../../hooks';

export default function useRadio(): FormElementProps {
  const text = useLang();

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
