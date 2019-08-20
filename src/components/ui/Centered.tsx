import React from 'react';
import styled from 'styled-components';

type CenteredProps = {
  children: JSX.Element;
};

export default function CenteredComponent({ children }: CenteredProps) {
  return <Centered>{children}</Centered>;
}

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;
