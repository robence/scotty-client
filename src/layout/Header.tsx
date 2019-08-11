import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spaces } from '../styles';
import Logo from '../components/Logo';

const Header = styled.header`
  height: 3rem;
  width: 100%;
  background-color: ${colors.primary};

  display: flex;
  align-items: center;

  position: fixed;
  z-index: 2;
`;

const StyledNavLink = styled(NavLink)`
  font-weight: 700;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.80);
  text-decoration: none;
  border-radius: ${spaces.xs};
  margin: 0 ${spaces.xs};
  padding: ${spaces.xs};

  :hover {
    color: #fff;
  }
`;

export default function HeaderComponent() {
  return (
    <Header>
      <Logo />
      <StyledNavLink to="/">Dashboard</StyledNavLink>
      <StyledNavLink to="/expense">New Expense</StyledNavLink>
      <StyledNavLink to="/tag">New Tag</StyledNavLink>
      <StyledNavLink to="/account">Account</StyledNavLink>
    </Header>
  );
}
