import React, { useState } from 'react';
import MenuItemContainer from '../components/menu/MenuItemContainer';
import Logo from '../components/Logo';
import Hamburger from '../components/Hamburger';

export default function Header(): JSX.Element {
  const [hamburger, setHamburger] = useHamburger();

  return (
    <div className="header">
      <Logo />
      <Hamburger setHamburger={setHamburger} />
      <MenuItemContainer className={hamburger ? 'is-hamburger' : ''} />
    </div>
  );
}

function useHamburger() {
  const [state, setState] = useState(true);

  const setHamburger = () => {
    setState(!state);
  };

  return [state, setHamburger];
}
