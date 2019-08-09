import React from 'react';
import styled from 'styled-components';
import { AutoComplete, Button } from 'antd';
import Card from '../ui/Card';

const Account = styled.div`
  width: 350px;
`;

type PresenterProps = {
  account: string;
  loading: boolean;
  accountExists: boolean;
  dataSource: string[];
  handleCreate: () => void;
  handleChange: (e: any) => void;
  handleSelect: (e: any) => void;
};
export default function Presenter({
  account,
  loading,
  accountExists,
  dataSource,
  handleChange,
  handleCreate,
}: PresenterProps) {
  return (
    <Card>
      <Account>
        <h1>Select account</h1>
        <AutoComplete
          style={{ width: 200, marginRight: '1rem' }}
          dataSource={dataSource}
          placeholder="Type to create a new account:"
          allowClear={true}
          value={account}
          onChange={handleChange}
          filterOption={(inputValue: string, option: any): boolean =>
            option.props.children
              .toUpperCase()
              .indexOf(inputValue.toUpperCase()) !== -1
          }
        />

        {!accountExists ? (
          <Button type="primary" loading={loading} onClick={handleCreate}>
            Create
          </Button>
        ) : (
          <Button type="primary" onClick={() => {}}>
            Select
          </Button>
        )}
      </Account>
    </Card>
  );
}
