import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-block;
  color: ${({ color }) => color || 'black'};
  font-size: 1.2rem;
`;

type LabelProps = { title: string; color: string };

export default function LabelComponent({ title, color }: LabelProps) {
  return <Label color={color}>{title}</Label>;
}
