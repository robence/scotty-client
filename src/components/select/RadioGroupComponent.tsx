import React from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio/interface';
import { Base } from '../../types/model';

type PresenterType = {
  selected: string | number | string[];
  options: Base[];
  handleSelect: (e: RadioChangeEvent) => void;
};

export default function RadioGroupComponent({
  selected,
  handleSelect,
  options,
}: PresenterType): JSX.Element {
  return (
    <Radio.Group value={selected} onChange={handleSelect}>
      {options.map(({ _id, name }) => (
        <Radio.Button key={_id} value={_id}>
          {name}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
}
