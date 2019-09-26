import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spaces, headerSize } from '../consts';
import Logo from '../components/ui/Logo';
import text from '../i18n';

export default function HeaderComponent({
  isLoggedIn,
}: {
  isLoggedIn: boolean;
}): JSX.Element {
  return isLoggedIn ? (
    <Header>
      <Logo />
      <StyledNavLink to="/">{text.layout.header.dashboard}</StyledNavLink>
      <StyledNavLink to="/expense">{text.layout.header.expense}</StyledNavLink>
      <StyledNavLink to="/tag">{text.layout.header.tag}</StyledNavLink>
      <StyledNavLink to="/account">{text.layout.header.account}</StyledNavLink>
      <div style={{ marginLeft: 'auto' }}>
        <StyledNavLink to="/logout">Logout</StyledNavLink>
      </div>
    </Header>
  ) : (
    <Header>
      <Logo />
      <div style={{ marginLeft: 'auto' }}>
        <StyledNavLink to="/login">Login</StyledNavLink>
      </div>
      <StyledNavLink to="/register">Register</StyledNavLink>
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
