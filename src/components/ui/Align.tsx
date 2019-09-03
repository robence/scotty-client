import React, { ReactNode } from 'react';
import styled from 'styled-components';

type AlignType = 'horizontal' | 'vertical';
type ContentType = 'between' | 'evenly';

type StyledProps = {
  type?: AlignType;
  content?: ContentType;
};

type AlignProps = {
  children: ReactNode[];
} & StyledProps;

export default function AlignComponent({
  children,
  type = 'horizontal',
  content = 'between',
}: AlignProps): JSX.Element {
  return (
    <Align type={type} content={content}>
      {children}
    </Align>
  );
}

AlignComponent.defaultProps = {
  type: 'horizontal',
  content: 'between',
};

const Align = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ content }: StyledProps): string =>
    content === 'evenly' ? 'space-evenly' : 'space-between'};

  flex-direction: ${({ type }: StyledProps): string =>
    type === 'vertical' ? 'column' : 'row'};
`;
