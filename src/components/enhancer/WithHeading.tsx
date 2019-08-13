import React from 'react';
import styled from 'styled-components';
import { spaces } from '../../consts/index';

type WithHeadingType = {
  title: string;
};

const WithTitle = styled.div`
  margin-bottom: ${spaces.m};
`;

export default function WithTitleComponent({ title }: WithHeadingType) {
  return (
    <WithTitle>
      <h2>{title}</h2>
      <hr />
    </WithTitle>
  );
}
