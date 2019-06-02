import React from 'react';
import MenuItemContainer from '../components/menu/MenuItemContainer';
import Logo from '../components/Logo';

export default function Header(): JSX.Element {
  return (
    <div className="header">
      <Logo />
      <MenuItemContainer />
    </div>
  );
}
