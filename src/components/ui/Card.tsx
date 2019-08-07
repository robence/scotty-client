import React from 'react';
import styled from 'styled-components';
import { spaces } from '../../styles';

const Card = styled.div`
  /* min-width: 200px;
  min-height: 300px; */
  width: fit-content;
  height: fit-content;
  margin: ${spaces.l};
  background-color: white;
  padding: ${spaces.m};
  box-shadow: 0 ${spaces.xs} ${spaces.s} 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: ${spaces.xs};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function CardComponent({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return <Card>{children}</Card>;
}
