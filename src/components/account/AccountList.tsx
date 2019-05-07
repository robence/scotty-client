import React from 'react';
import styled from 'styled-components';

import Account from './Account';

const AccountList = ({ accounts }: any) => {
  const getAccounts = () =>
    accounts.map((account: any) => (
      <Account key={account.name} name={account.name} />
    ));
  // backgroundColor: '#edeeef';

  const Div = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-gap: 1rem;
    padding: 10px;
    grid-area: sidebar;
  `;

  return <Div>{getAccounts()}</Div>;
};

export default AccountList;
