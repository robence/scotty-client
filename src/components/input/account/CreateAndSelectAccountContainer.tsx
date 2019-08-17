import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import Presenter from './CreateAndSelectAccountComponent';
import { Account, AccountList } from '../../../types/model';

type ConnectProps = {
  account: Account;
  accountList: AccountList;
  createAccount: (account: Account) => void;
  selectAccount: (account: Account) => void;
};

export default function AccountComponent({
  account,
  accountList,
  createAccount,
  selectAccount,
}: ConnectProps) {
  const [input, setInput] = useState(account ? account.name : '');
  const [loading] = useState(false);

  const accountExists =
    Object.values(accountList).find(({ name }) => name === input) !== undefined;
  const selectDisabled = input === account.name;

  useEffect(() => {
    if (account) {
      message.success(`${account.name} is now the default account.`);
    }
  }, [account]);

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
