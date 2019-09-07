import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd';
import CreateAndSelectAccountFormComponent from './CreateAndSelectAccountFormComponent';
import * as accountActionCreators from '../../../store/account/actions';
import { State } from '../../../store/initialState';
import { genId } from '../../../utils';

export default function CreateAndSelectAccountFormContainer(): JSX.Element {
  const { selectedAccount, accountList } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const { createAccount, selectAccount } = bindActionCreators(
    accountActionCreators,
    dispatch,
  );

  const [input, setInput] = useState(
    selectedAccount ? selectedAccount.name : '',
  );
  const [loading] = useState(false);

  const accountExists =
    Object.values(accountList).find(({ name }) => name === input) !== undefined;
  const selectDisabled = input === selectedAccount.name;

  useEffect(() => {
    if (selectedAccount) {
      message.info(`${selectedAccount.name} is now the default account.`);
    }
  }, [selectedAccount]);

  return (
    <CreateAndSelectAccountFormComponent
      input={input}
      loading={loading}
      accountExists={accountExists}
      dataSource={Object.values(accountList).map(({ name }) => name)}
      handleChange={(e): void => setInput(e)}
      handleCreate={(): void => {
        createAccount({
          _id: genId(20),
          name: input,
        });
      }}
      handleSelect={(): void => {
        const accountSelected = Object.values(accountList).find(
          ({ name }) => name === input,
        );
        selectAccount(accountSelected || { _id: '2', name: 'Account3' });
      }}
      disabled={selectDisabled}
    />
  );
}
