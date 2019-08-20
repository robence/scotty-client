import React from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio/interface';
import { IdNameTuple } from '../../types/form';

type PresenterType = {
  selected: string | number | string[];
  // selected: keyof IdNameArray;
  options: IdNameTuple[];
  handleSelect: (e: RadioChangeEvent) => void;
};

export default function RadioGroupComponent({
  selected,
  handleSelect,
  options,
}: PresenterType) {
  return (
    <Radio.Group value={selected} onChange={handleSelect}>
      {options.map(({ id, name }) => (
        <Radio.Button key={id} value={id}>
          {name}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
}
