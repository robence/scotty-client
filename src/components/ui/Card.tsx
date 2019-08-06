import React from 'react';
import styled from 'styled-components';
import { spaces } from '../../styles';

const Card = styled.div`
  width: auto;
  height: auto;
  margin: ${spaces.l};
  background-color: white;
  padding: ${spaces.m};
  box-shadow: 0 ${spaces.xs} ${spaces.s} 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: ${spaces.xs};

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transform: scale(1.15);
  }
`;

export default function CardComponent({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return <Card>{children}</Card>;
}
