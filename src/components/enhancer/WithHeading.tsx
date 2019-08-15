import React from 'react';
import styled from 'styled-components';
import { spaces } from '../../consts/index';

type WithHeadingType = {
  title: string;
  children: JSX.Element;
};

const Hr = styled.hr`
  margin-bottom: ${spaces.m};
`;

export default function WithTitleComponent({
  title,
  children,
}: WithHeadingType) {
  return (
    <div>
      <h2>{title}</h2>
      <Hr />
      {children}
    </div>
  );
}
