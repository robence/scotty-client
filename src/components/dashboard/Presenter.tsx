import React from 'react'
import styled from 'styled-components';
import Card from '../ui/Card';
import WithHeading from '../enhancer/WithHeading';

const Presenter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export default function PresenterComponent() {
  return (
    <Presenter>
      <Card>
        <WithHeading title={"All Expenses"} />
      </Card>
      <Card>
        <WithHeading title={"Expenses by category"} />
      </Card>
      <Card>
        <WithHeading title={"Expenses by tags"} />
      </Card>
    </Presenter>
  )
}
