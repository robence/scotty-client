import React from 'react';
import styled from 'styled-components';

export default function CardComponent({ children }: any) {
  const Card = styled.div`
    width: 400px;
    height: 200px;
    margin: 20px;
    background-color: white;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;

    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &: hover {
      transform: scale(1.15);
    }
  `;

  return <Card>{children}</Card>;
}
