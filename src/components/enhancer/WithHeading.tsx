import React from 'react'
import styled from 'styled-components';
import { spaces } from '../../styles/index';

type WithHeadingType = {
  title: string;
}

const WithTitle = styled.div`
  margin-bottom: ${spaces.m};
`;

export default function WithTitleComponent({ title }: WithHeadingType
) {
  return (
    <WithTitle>
      <h1>{title}</h1>
      <hr/>
    </WithTitle>
  )
}
