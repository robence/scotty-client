import React from 'react';
import { Select } from 'antd';

type PresenterType = {
  selected: string[];
  options: { id: number; name: string }[];
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
        <Select.Option key={id} value={id}>
          {name}
        </Select.Option>
      ))}
    </Select>
  );
}
