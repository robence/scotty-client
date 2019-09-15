import { useState, ChangeEvent } from 'react';
import { InputElementProps } from '../../../types/form';

export default function useInput(): InputElementProps {
  const [value, setValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const clear = (): void => {
    setValue('');
  };

  return {
    value,
    onChange,
    clear,
  };
}
