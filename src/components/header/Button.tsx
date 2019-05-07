import React from 'react';
import styled from 'styled-components';

export default function Button({ title }: any) {
  const Div = styled.div`
    border-right: solid 1px grey;
    margin: 0;
    padding: 5px;
    color: white;
    font-weight: bold;

    &: hover {
      background-color: rgb(46, 121, 242);
    }
  `;

  return <Div>{title}</Div>;
}
