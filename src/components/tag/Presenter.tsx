import React from 'react';
import styled from 'styled-components';
import { AutoComplete, Button } from 'antd';
import Card from '../ui/Card';
import Label from './Label';
import WithHeading from '../enhancer/WithHeading';
import { defaultCardWith } from '../../consts';

const Tag = styled.div`
  width: ${defaultCardWith};
`;

type PresenterProps = {
  tag: string;
  loading: boolean;
  tagExists: boolean;
  disabled: boolean;
  dataSource: string[];
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
};
export default function Presenter({
  tag,
  loading,
  tagExists,
  disabled,
  dataSource,
  handleChange,
  handleSubmit,
}: PresenterProps) {
  return (
    <Card>
      <Tag>
        <WithHeading title={'Create a new tag'} />
        {tagExists && (
          <Label
            title="This tag already exists. Please enter a new one."
            color="red"
          />
        )}
        <AutoComplete
          style={{ width: 200, marginRight: '1rem' }}
          dataSource={dataSource}
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
      </Tag>
    </Card>
  );
}
