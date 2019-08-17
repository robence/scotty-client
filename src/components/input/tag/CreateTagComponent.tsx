import React from 'react';
import { AutoComplete, Button } from 'antd';
import Label from './Label';


type PresenterProps = {
  tag: string;
  loading: boolean;
  tagExists: boolean;
  disabled: boolean;
  tagNames: string[];
  handleChange: (e: any) => void;
  handleSubmit: () => void;
};
export default function CreateTagComponent({
  tag,
  loading,
  tagExists,
  disabled,
  tagNames,
  handleChange,
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
          style={{ width: 200, marginRight: '1rem' }}
          dataSource={tagNames}
          placeholder="Type to create a new tag"
          allowClear={true}
          value={tag}
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
          loading={loading}
          onClick={handleSubmit}
        >
          Create
        </Button>
      </div>
  );
}
