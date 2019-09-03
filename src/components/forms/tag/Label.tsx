import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  color: ${({ color }): string => color || 'black'};
  font-size: 1.2rem;
`;

type LabelProps = { title: string; color: string };

export default function LabelComponent({
  title,
  color,
}: LabelProps): JSX.Element {
  return <Label color={color}>{title}</Label>;
}
