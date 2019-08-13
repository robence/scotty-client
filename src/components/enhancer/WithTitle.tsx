import React from 'react';
import styled from 'styled-components';
import { spaces } from '../../consts/index';

type WithTitleType = {
  title: string;
  children?: any;
};

const WithTitle = styled.div`
  margin-bottom: ${spaces.s};
`;

export default function WithTitleComponent({ title, children }: WithTitleType) {
  return (
    <WithTitle>
      <h3>{title}</h3>
      {children}
    </WithTitle>
  );
}
