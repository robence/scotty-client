import React, { ReactNode } from 'react';
import styled from 'styled-components';

type CenterProps = {
  children: ReactNode;
};

export default function CenteredComponent({
  children,
}: CenterProps): JSX.Element {
  return <Center>{children}</Center>;
}

const Center = styled.div`
  display: flex;
  justify-content: center;
`;
