import React, { MouseEvent } from 'react';
import { AutoComplete, Button } from 'antd';

type CreateAndSelectAccountProps = {
  input: string;
  loading: boolean;
  accountExists: boolean;
  dataSource: string[];
  disabled: boolean;
  handleCreate: (e: MouseEvent) => void;
  handleChange: (e: any) => void;
  handleSelect: (e: MouseEvent) => void;
};
export default function CreateAndSelectAccountFormComponent({
  input,
  loading,
  accountExists,
  dataSource,
  disabled,
  handleChange,
  handleCreate,
  handleSelect,
}: CreateAndSelectAccountProps) {
  return (
    <div>
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
    </div>
  );
}
