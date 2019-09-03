import React from 'react';
import { AutoComplete, Button } from 'antd';
import Label from './Label';
import Align from '../../ui/Align';

type PresenterProps = {
  input: string;
  tagExists: boolean;
  tagNames: string[];
  handleChange: (e: any) => void;
  disabled: boolean;
  handleSubmit: () => void;
};

export default function CreateTagFormComponent({
  input,
  tagExists,
  tagNames,
  handleChange,
  disabled,
  handleSubmit,
}: PresenterProps): JSX.Element {
  return (
    <div>
      {tagExists && (
        <Label
          title="This tag already exists. Please enter a new one."
          color="red"
        />
      )}
      <Align>
        <AutoComplete
          style={{
            width: 200,
            marginRight: '1rem',
          }}
          dataSource={tagNames}
          placeholder="Type to create a new tag"
          allowClear
          value={input}
          onChange={handleChange}
          filterOption={(inputValue: string, option: any): boolean =>
            option.props.children
              .toUpperCase()
              .indexOf(inputValue.toUpperCase()) !== -1
          }
        />
        <Button type="primary" disabled={disabled} onClick={handleSubmit}>
          Create
        </Button>
      </Align>
    </div>
  );
}
