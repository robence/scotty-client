import React from 'react'
import styled from 'styled-components';
import Card from '../ui/Card';
import WithTitle from '../enhancer/WithTitle';

const Presenter = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;
export default function PresenterComponent() {
  return (
    <Presenter>
      <Card>
        <WithTitle title={"Expenses by category"}>

        </WithTitle>
      </Card>
      <Card>
        <WithTitle title={"Expenses by tags"}>

        </WithTitle>
      </Card>
    </Presenter>
  )
}
