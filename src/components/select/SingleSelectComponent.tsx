import React, { SetStateAction } from 'react';
import { Select } from 'antd';
import { Base } from '../../types/base';

type PresenterProps = {
  props: {
    selected: string;
    options: Base[];
    onChange: (e: SetStateAction<string>) => void;
  };
};
export default function SingleSelectComponent({
  props: { selected, options, onChange },
}: PresenterProps): JSX.Element {
  return (
    <Select value={selected} onChange={onChange} style={{ width: '100%' }}>
      {options.map(({ _id, name }) => (
        <Select.Option key={_id} value={_id}>
          {name}
        </Select.Option>
      ))}
    </Select>
  );
}
