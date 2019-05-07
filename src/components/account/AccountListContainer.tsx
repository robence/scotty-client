import React, { useState, useEffect } from 'react';

import AccountService from './AccountService';
import AccountList from './AccountList';

const AccountListContainer = () => {
  const [accounts, setAccounts] = useState(0);

  useEffect(() => {
    AccountService.getAllAccounts().then((result) => setAccounts(result));
  });

  const getAccounts = () => <AccountList accounts={accounts} />;
  return <div>{accounts && getAccounts()}</div>;
};

export default AccountListContainer;
