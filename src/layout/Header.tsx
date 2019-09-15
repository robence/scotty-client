import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spaces, headerSize } from '../consts';
import Logo from '../components/ui/Logo';

export default function HeaderComponent(): JSX.Element {
  return (
    <Header>
      <Logo />
      <StyledNavLink to="/">Dashboard</StyledNavLink>
      <StyledNavLink to="/expense">New Transaction</StyledNavLink>
      <StyledNavLink to="/tag">New Tag</StyledNavLink>
      <StyledNavLink to="/account">New Account</StyledNavLink>

      <div style={{ marginLeft: 'auto' }}>
        <StyledNavLink to="/register">Register</StyledNavLink>
      </div>
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
