import React from 'react';

import Account from './account';

const AccountList = ({ accounts }) => {
  const getAccounts = () => {
    return accounts.map((account) => (
      <Account key={account.name} name={account.name} />
    ));
  };

  const cStyles = {
    display: 'grid',
    gridAutoFlow: 'row',
    gridGap: '1rem',
    // backgroundColor: '#edeeef',
    padding: '10px',
    gridArea: 'sidebar',
  };

  return <div style={cStyles}>{getAccounts()}</div>;
};

export default AccountList;
