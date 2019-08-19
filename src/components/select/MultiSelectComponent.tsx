import React from 'react';
import { Select } from 'antd';

type PresenterType = {
  selected: string[];
  options: string[];
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
      {options.map((item) => (
        <Select.Option key={item} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  );
}
