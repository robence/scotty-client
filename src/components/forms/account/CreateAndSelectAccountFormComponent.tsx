import React, { MouseEvent } from 'react';
import { AutoComplete, Button } from 'antd';
import { SelectValue } from 'antd/lib/select';
import { Align } from '../../ui';
import text from '../../../i18n';

type CreateAndSelectAccountProps = {
  input: string;
  loading: boolean;
  accountExists: boolean;
  dataSource: string[];
  disabled: boolean;
  handleCreate: (e: MouseEvent) => void;
  handleChange: (e: SelectValue) => void;
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
}: CreateAndSelectAccountProps): JSX.Element {
  return (
    <Align>
      <AutoComplete
        style={{ width: 'inherit', marginRight: '1rem' }}
        dataSource={dataSource}
        placeholder={text.components.forms.account.placeholder}
        allowClear
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
          {text.components.forms.account.create}
        </Button>
      ) : (
        <Button
          type="primary"
          loading={loading}
          onClick={handleSelect}
          disabled={disabled}
        >
          {text.components.forms.account.select}
        </Button>
      )}
    </Align>
  );
}
