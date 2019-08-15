import React from 'react';
import styled from 'styled-components';

const Logo = styled.h2`
  margin: 0 calc(12vw - 5rem) 0 5vw;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  width: min-content;
  color: white;
  font-weight: bolder;
`;
export default function LogoComponent(): JSX.Element {
  return <Logo>Scooty Wallet</Logo>;
}
