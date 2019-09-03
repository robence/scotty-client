import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { spaces } from '../../consts/index';

type WithHeadingType = {
  title: string;
  children: ReactNode;
};

const Container = styled.div`
  width: 100%;
`;

const Hr = styled.hr`
  margin-bottom: ${spaces.m};
`;

export default function WithTitleComponent({
  title,
  children,
}: WithHeadingType): JSX.Element {
  return (
    <Container>
      <h2>{title}</h2>
      <Hr />
      {children}
    </Container>
  );
}
