import React from 'react';
import { AutoComplete, Button } from 'antd';
import Label from './Label';

type PresenterProps = {
  input: string;
  tagExists: boolean;
  tagNames: string[];
  handleChange: (e: any) => void;
  disabled: boolean;
  // loading: boolean;
  handleSubmit: () => void;
};
export default function CreateTagFormComponent({
  input,
  tagExists,
  tagNames,
  handleChange,
  disabled,
  // loading,
  handleSubmit,
}: PresenterProps) {
  return (
    <div>
      {tagExists && (
        <Label
          title="This tag already exists. Please enter a new one."
          color="red"
        />
      )}
      <AutoComplete
        style={{
          width: 200,
          marginRight: '1rem',
        }}
        dataSource={tagNames}
        placeholder="Type to create a new tag"
        allowClear={true}
        value={input}
        onChange={handleChange}
        filterOption={(inputValue: string, option: any): boolean =>
          option.props.children
            .toUpperCase()
            .indexOf(inputValue.toUpperCase()) !== -1
        }
      />
      <Button
        type="primary"
        disabled={disabled}
        // loading={loading}
        onClick={handleSubmit}
      >
        Create
      </Button>
    </div>
  );
}
