import React from 'react';
import styled from 'styled-components';
import { spaces } from '../../consts/index';

type WithHeadingType = {
  title: string;
  children: JSX.Element;
};

const WithTitle = styled.div`
  margin-bottom: ${spaces.m};
`;

export default function WithTitleComponent({
  title,
  children,
}: WithHeadingType) {
  return (
    <WithTitle>
      <h2>{title}</h2>
      <hr />
      {children}
    </WithTitle>
  );
}
