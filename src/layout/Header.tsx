import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spaces } from '../styles';
import Logo from '../components/Logo';

const Header = styled.header`
  height: 3rem;
  color: white;
  background-color: ${colors.primary};
  width: 100%;
`;

const Nav = styled.nav`
  height: inherit;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  height: 100%;
`;

const Li = styled.li`
  user-select: none;
  font-weight: 700;
  font-size: 1rem;
  border-radius: ${spaces.xs};
  padding: ${spaces.xs};
  cursor: pointer;
  align-self: center;
  margin: 0 ${spaces.xs};

  :hover {
    background-color: ${colors.primaryDark};
  }
  & > a {
    color: white;
    text-decoration: none;
  }
`;

export default function HeaderComponent(): JSX.Element {
  return (
    <Header>
      <Nav>
        <Ul>
          <Logo />
          <Li>
            <NavLink to="/">Dashboard</NavLink>
          </Li>
          <Li>
            <NavLink to="/expense">New Expense</NavLink>
          </Li>
          <Li>
            <NavLink to="/tag">New Tag</NavLink>
          </Li>
          <Li>
            <NavLink to="/account">Account</NavLink>
          </Li>
        </Ul>
      </Nav>
    </Header>
  );
}
