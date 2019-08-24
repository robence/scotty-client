import { useState } from 'react';
import { RadioChangeEvent } from 'antd/lib/radio/interface';
import { FormElementProps } from '../../../types/form';

export default function useRadio(): FormElementProps {
  const radioOptions = [
    { id: '-', name: 'Expense' },
    { id: '+', name: 'Income' },
  ];
  const [radioId, setRadio] = useState('-');
  const handleRadioSelect = (e: RadioChangeEvent) => setRadio(e.target.value);

  return {
    selected: radioId,
    options: radioOptions,
    onChange: handleRadioSelect,
  };
}
