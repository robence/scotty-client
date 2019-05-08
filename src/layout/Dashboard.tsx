import React from 'react';
import styled from 'styled-components';

import Logo from '../components/ui/Logo';
import Card from '../components/ui/Card';

export default function DashboardComponent() {
  const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    padding: 20px;
  `;

  const cards = Array(5).fill(null);

  return (
    <Div>
      {cards.map((card, i) => (
        <Card key={i}>
          <Logo loader={`Loader${i + 1}`} />
        </Card>
      ))}
    </Div>
  );
}
