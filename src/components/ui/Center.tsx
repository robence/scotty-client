import React from 'react';
import styled from 'styled-components';

type CenterProps = {
  children: JSX.Element;
};

export default function CenteredComponent({ children }: CenterProps) {
  return <Center>{children}</Center>;
}

const Center = styled.div`
  display: flex;
  justify-content: center;
`;
