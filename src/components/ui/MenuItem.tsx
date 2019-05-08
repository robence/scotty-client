import React from 'react';
import styled from 'styled-components';

export default function MenuItemComponent({ children, style }: any) {
  const MenuItem = styled.div`
    color: white;
    font-weight: 900;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    white-space: nowrap;
    margin: 0 5px;

    height: min-content;

    &: hover {
      background-color: #06ce77;
    }
  `;

  return <MenuItem style={style}>{children}</MenuItem>;
}
