import React, { useState } from 'react';
import MenuItemContainer from '../components/menu/MenuItemContainer';
import Logo from '../components/Logo';
import Hamburger from '../components/Hamburger';
import { ISetHamburger, IUseHamburger } from '../types';

function useHamburger(): IUseHamburger {
  const [state, setState] = useState(true);

  const setHamburger: ISetHamburger = (): void => {
    setState(!state);
  };

  return [state, setHamburger];
}

export default function Header(): JSX.Element {
  const [hamburger, setHamburger] = useHamburger();

  return (
    <div className="header">
      <Logo />
      <Hamburger setHamburger={setHamburger as ISetHamburger} />
      <MenuItemContainer className={hamburger ? 'is-hamburger' : ''} />
    </div>
  );
}
