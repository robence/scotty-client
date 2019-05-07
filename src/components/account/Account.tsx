import React from 'react';
import styled from 'styled-components';

export default function AccountComponent({ name }: any) {
  const P = styled.p`
    display: grid;
    align-content: center;
    text-align: center;
    border: 1px solid black;
    margin: 0;
    color: grey;
    height: 100px;

    &: hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `;

  return <P>{name}</P>;
}
