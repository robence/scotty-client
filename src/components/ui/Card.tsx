import React from 'react';
import styled from 'styled-components';
import { spaces } from '../../consts';

const Card = styled.div`
  width: fit-content;
  height: fit-content;
  margin: ${spaces.l};
  background-color: white;
  padding: ${spaces.l};
  box-shadow: 0 ${spaces.xs} ${spaces.s} 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: ${spaces.s};

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
