import React from 'react';
import styled from 'styled-components';

type AlignType = 'horizontal' | 'vertical';
type ContentType = 'between' | 'evenly';

type StyledProps = {
  type?: AlignType;
  content?: ContentType;
};

type AlignProps = {
  children: JSX.Element[];
} & StyledProps;

export default function AlignComponent({
  children,
  type = 'horizontal',
  content = 'between',
}: AlignProps) {
  return (
    <Align type={type} content={content}>
      {children}
    </Align>
  );
}

const Align = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ content }: StyledProps) =>
    content === 'evenly' ? 'space-evenly' : 'space-between'};

  flex-direction: ${({ type }: StyledProps) =>
    type === 'vertical' ? 'column' : 'row'};
`;
