import React from 'react';
import styled from 'styled-components';
import MenuItem from '../components/ui/MenuItem';
import Logo from '../components/ui/Logo';

export default function HeaderComponent() {
  const Div = styled.div`
    width: fit-content;
    min-height: 50px;
    background-color: #19e68c;

    min-width: 100vw;
    width: fit-content;

    display: flex;
    align-items: center;
    justify-content: start;
  `;

  return (
    <Div>
      <MenuItem style={{ marginLeft: 'calc(20vw - 100px)', fontSize: '2rem' }}>
        Scooty Wallet
      </MenuItem>
      <MenuItem>Dashboard</MenuItem>
      <MenuItem>Expenses</MenuItem>
      <MenuItem>MenuItem3</MenuItem>
      <MenuItem>Menuitem4</MenuItem>
      <MenuItem>(i)Account</MenuItem>
      <MenuItem>(i)Settings</MenuItem>
    </Div>
  );
}
