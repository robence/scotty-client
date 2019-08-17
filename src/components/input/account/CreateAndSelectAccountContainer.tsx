import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { message } from 'antd';
import Presenter from './CreateAndSelectAccountComponent';
import { useSelector, useDispatch } from 'react-redux';
import * as accountActionCreators from '../../../store/account/actions';
import { State } from '../../../store/initialState';

export default function AccountComponent() {
  const { selectedAccount, accountList } = useSelector(
    ({ selectedAccount, accountList }: State) => ({
      selectedAccount,
      accountList,
    }),
  );
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
      message.success(`${selectedAccount.name} is now the default account.`);
    }
  }, [selectedAccount]);

  return (
    <Presenter
      input={input}
      loading={loading}
      accountExists={accountExists}
      dataSource={Object.values(accountList).map(({ name }) => name)}
      handleChange={(e) => setInput(e)}
      handleCreate={() =>
        createAccount({
          id: Math.floor(Math.random() * 999) + 20,
          name: input,
        })
      }
      handleSelect={() =>
        selectAccount(
          Object.values(accountList).find(({ name }) => name === input),
        )
      }
      disabled={selectDisabled}
    />
  );
}
