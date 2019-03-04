import React, { useState, useEffect } from 'react';
import AccountService from './account-service';
import AccountList from './account-list';

const AccountListContainer = () => {
  const [accounts, setAccounts] = useState(0);

  useEffect(() => {
    AccountService.getAllAccounts().then((result) => setAccounts(result));
  });

  const getAccounts = () => {
    return <AccountList accounts={accounts} />;
  };

  return <div>{accounts && getAccounts()}</div>;
};

export default AccountListContainer;
