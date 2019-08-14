import React from 'react';
import styled from 'styled-components';
import { AutoComplete, Button } from 'antd';
import Card from '../../components/ui/Card';
import WithHeading from '../../components/enhancer/WithHeading';
import { defaultCardWith } from '../../consts';

const Account = styled.div`
  width: ${defaultCardWith};
`;

type PresenterProps = {
  input: string;
  loading: boolean;
  accountExists: boolean;
  dataSource: string[];
  disabled: boolean;
  handleCreate: (e: any) => void;
  handleChange: (e: any) => void;
  handleSelect: (e: any) => void;
};
export default function Presenter({
  input,
  loading,
  accountExists,
  dataSource,
  disabled,
  handleChange,
  handleCreate,
  handleSelect,
}: PresenterProps) {
  return (
    <Card>
      <WithHeading title={'Switch between accounts'}>
        <Account>
          <AutoComplete
            style={{ width: 200, marginRight: '1rem' }}
            dataSource={dataSource}
            placeholder="Type to create a new account:"
            allowClear={true}
            value={input}
            onChange={handleChange}
          />

          {!accountExists ? (
            <Button
              type="primary"
              loading={loading}
              onClick={handleCreate}
              disabled={disabled}
            >
              Create
            </Button>
          ) : (
            <Button
              type="primary"
              loading={loading}
              onClick={handleSelect}
              disabled={disabled}
            >
              Select
            </Button>
          )}
        </Account>
      </WithHeading>
    </Card>
  );
}
