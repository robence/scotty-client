import React from 'react'
import styled from 'styled-components';
import { spaces } from '../../styles/index';

type WithTitleType = {
  title: string;
  children?: any;
}

const WithTitle = styled.div`
  margin-bottom: ${spaces.s};
`;

export default function WithTitleComponent({ title, children }: WithTitleType) {
  return (
    <WithTitle>
      <h1>{title}</h1>
      {children}
    </WithTitle>
  )
}
