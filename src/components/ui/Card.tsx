import React from 'react';
import styled from 'styled-components';
import { spaces } from '../../consts';

type CardProps = {
  children: JSX.Element;
} & StyledProps;

type StyledProps = {
  width?: string;
};

export default function CardComponent({
  children,
  width,
}: CardProps): JSX.Element {
  return <Card width={width}>{children}</Card>;
}

const Card = styled.div`
  min-width: 300px;
  height: fit-content;
  width: ${({ width }: StyledProps) => width || 'fit-content'};

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
