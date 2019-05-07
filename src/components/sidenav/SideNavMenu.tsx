import React from 'react';
import styled from 'styled-components';

export default function SideNavMenu({ name }: any) {
  const Div = styled.div`
    padding: 5px;
    margin: 0;
    color: grey;

    &: hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `;

  return <Div>{name}</Div>;
}
