import React from 'react';
import { AutoComplete, Button } from 'antd';
import { SelectValue } from 'antd/lib/select';
import Label from './Label';
import Align from '../../ui/Align';

type PresenterProps = {
  input: string;
  tagExists: boolean;
  tagNames: string[];
  handleChange: (e: SelectValue) => void;
  disabled: boolean;
  handleSubmit: () => void;
  text: any;
};

export default function CreateTagFormComponent({
  input,
  tagExists,
  tagNames,
  handleChange,
  disabled,
  handleSubmit,
  text,
}: PresenterProps): JSX.Element {
  return (
    <div>
      {tagExists && (
        <Label title={text.components.forms.tag.label} color="red" />
      )}
      <Align>
        <AutoComplete
          style={{
            width: 'inherit',
            marginRight: '1rem',
          }}
          dataSource={tagNames}
          placeholder={text.components.forms.tag.placeholder}
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
          {text.components.forms.tag.create}
        </Button>
      </Align>
    </div>
  );
}
