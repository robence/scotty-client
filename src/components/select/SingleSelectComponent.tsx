import React, { SetStateAction } from 'react';
import { Select } from 'antd';
import { IdNameTuple } from '../../types/form';

type PresenterProps = {
  props: {
    selected: string;
    options: IdNameTuple[];
    onChange: (e: SetStateAction<string>) => void;
  };
};
export default function SingleSelectComponent({
  props: { selected, options, onChange },
}: PresenterProps): JSX.Element {
  return (
    <Select value={selected} onChange={onChange} style={{ width: '100%' }}>
      {options.map(({ id, name }) => (
        <Select.Option key={id} value={id}>
          {name}
        </Select.Option>
      ))}
    </Select>
  );
}
