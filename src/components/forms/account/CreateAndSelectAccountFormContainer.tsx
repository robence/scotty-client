import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { SelectValue } from 'antd/lib/select';
import CreateAndSelectAccountFormComponent from './CreateAndSelectAccountFormComponent';
import * as accountActionCreators from '../../../store/account/actions';
import { State } from '../../../store/initialState';

export default function CreateAndSelectAccountFormContainer(): JSX.Element {
  const { selectedAccount, accountList } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const boundActionCreators = bindActionCreators(
    accountActionCreators,
    dispatch,
  );

  const [input, setInput] = useState(
    selectedAccount ? selectedAccount.name : '',
  );

  const handleChange = (e: SelectValue): void => {
    setInput(e.toString());
  };
  const handleCreate = (): void => {
    boundActionCreators.createAccountStart({
      name: input,
    });
  };
  const handleSelect = (): void => {
    const accountSelected = Object.values(accountList).find(
      ({ name }) => name === input,
    );
    if (!accountSelected) return;

    boundActionCreators.selectAccountStart(accountSelected);
  };

  const [loading] = useState(false);

  const accountExists =
    Object.values(accountList).find(({ name }) => name === input) !== undefined;
  const selectDisabled = input === selectedAccount.name;

  return (
    <CreateAndSelectAccountFormComponent
      input={input}
      loading={loading}
      accountExists={accountExists}
      dataSource={Object.values(accountList).map(({ name }) => name)}
      handleChange={handleChange}
      handleCreate={handleCreate}
      handleSelect={handleSelect}
      disabled={selectDisabled}
    />
  );
}
