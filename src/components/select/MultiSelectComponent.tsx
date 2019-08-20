import React from 'react';
import { Select } from 'antd';
import { IdNameTuple } from '../../types/form';

type PresenterType = {
  selected: string[];
  options: IdNameTuple[];
  handleSelect: (e: string[]) => void;
  placeholder: string;
};

export default function MultiSelectComponent({
  selected,
  options,
  handleSelect,
  placeholder,
}: PresenterType) {
  return (
    <Select
      mode="multiple"
      placeholder={placeholder}
      value={selected}
      onChange={handleSelect}
      style={{ width: '100%' }}
    >
      {options.map(({ id, name }) => (
        <Select.Option key={id} value={name}>
          {name}
        </Select.Option>
      ))}
    </Select>
  );
}
