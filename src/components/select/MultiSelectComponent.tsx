import React from 'react';
import { Select } from 'antd';
import { Base } from '../../types/base';

type PresenterType = {
  selected: string[];
  options: Base[];
  handleSelect: (e: string[]) => void;
  placeholder: string;
};

export default function MultiSelectComponent({
  selected,
  options,
  handleSelect,
  placeholder,
}: PresenterType): JSX.Element {
  return (
    <Select
      mode="multiple"
      placeholder={placeholder}
      value={selected}
      onChange={handleSelect}
      style={{ width: '100%' }}
    >
      {options.map(({ _id, name }) => (
        <Select.Option key={_id} value={name}>
          {name}
        </Select.Option>
      ))}
    </Select>
  );
}
