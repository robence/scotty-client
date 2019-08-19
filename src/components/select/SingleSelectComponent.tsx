import React, { SetStateAction } from 'react';
import { Select } from 'antd';

type PresenterProps = {
  selected: string;
  options: { id: number; name: string }[];
  handleSelect: (e: SetStateAction<string>) => void;
};
export default function SingleSelectComponent({
  selected,
  options,
  handleSelect,
}: PresenterProps) {
  return (
    <Select value={selected} onChange={handleSelect} style={{ width: '100%' }}>
      {options.map(({ id, name }) => (
        <Select.Option key={id} value={id}>
          {name}
        </Select.Option>
      ))}
    </Select>
  );
}
