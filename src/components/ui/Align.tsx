import React from 'react';
import styled from 'styled-components';

type AlignType = 'horizontal' | 'vertical';
type StyledProps = {
  type?: AlignType;
};

type AlignProps = {
  children: JSX.Element[];
} & StyledProps;

export default function AlignComponent({
  children,
  type = 'horizontal',
}: AlignProps) {
  return <Align type={type}>{children}</Align>;
}

const Align = styled.div`
  display: flex;
  justify-content: space-between;

  /* justify-content: ${({ type }: StyledProps) =>
    type === 'horizontal' ? 'space-between' : 'unset'};

  align-items: ${({ type }: StyledProps) =>
    type === 'vertical' ? 'space-between' : 'unset'}; */

  flex-direction: ${({ type }: StyledProps) =>
    type === 'vertical' ? 'column' : 'row'};
`;
