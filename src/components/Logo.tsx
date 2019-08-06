import React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
  margin-left: 5vw;
  margin-right: calc(15vw - 6rem);
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  width: min-content;
  font-size: 1.4rem;
`;
export default function LogoComponent(): JSX.Element {
  return <Logo>Scooty Wallet</Logo>;
}
