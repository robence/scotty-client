import React from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { State } from '../store/initialState';
import { colors, spaces, headerSize } from '../consts';
import Logo from '../components/ui/Logo';
import { useLang } from '../hooks';
import { SelectLanguageContainer } from '../components/redux-dropdowns';
import { Lang } from '../hooks/useLang';

export default function HeaderContainer(): JSX.Element {
  const { userId } = useSelector((state: State) => state);
  const text = useLang();
  const isLoggedIn = !!userId;
  return <HeaderComponent isLoggedIn={isLoggedIn} text={text} />;
}

function HeaderComponent({
  isLoggedIn,
  text,
}: {
  isLoggedIn: boolean;
  text: Lang;
}): JSX.Element {
  return isLoggedIn ? (
    <Header>
      <Logo />
      <StyledNavLink to="/">{text.layout.header.dashboard}</StyledNavLink>
      <StyledNavLink to="/expense">{text.layout.header.expense}</StyledNavLink>
      <StyledNavLink to="/tag">{text.layout.header.tag}</StyledNavLink>
      <StyledNavLink to="/account">{text.layout.header.account}</StyledNavLink>
      <div style={{ marginLeft: 'auto' }}>
        <StyledNavLink to="/logout">{text.layout.header.logout}</StyledNavLink>
      </div>
      <SelectLanguageContainer />
    </Header>
  ) : (
    <Header>
      <Logo />
      <div style={{ marginLeft: 'auto' }}>
        <StyledNavLink to="/login">{text.layout.header.login}</StyledNavLink>
      </div>
      <StyledNavLink to="/register">
        {text.layout.header.register}
      </StyledNavLink>
      <SelectLanguageContainer />
    </Header>
  );
}

const Header = styled.header`
  height: ${headerSize};
  width: 100%;
  background-color: ${colors.primary};

  display: flex;
  align-items: center;

  position: fixed;
  z-index: 2;
`;

const StyledNavLink = styled(NavLink)`
  flex-shrink: 0;
  font-weight: 700;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  border-radius: ${spaces.xs};
  margin: 0 ${spaces.s};
  padding: ${spaces.xs};
  :hover {
    color: #fff;
  }
`;
