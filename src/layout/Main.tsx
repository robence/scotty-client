import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Expense, Tag, Account, Dashboard, Register } from '../screens';
import { spaces, headerSize } from '../consts';

export default function MainComponent(): JSX.Element {
  return (
    <Main>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/expense" component={Expense} />
        <Route path="/tag" component={Tag} />
        <Route path="/account" component={Account} />
        <Route path="/register" component={Register} />
      </Switch>
    </Main>
  );
}

const Main = styled.main`
  padding: calc(${headerSize} + 1rem) ${spaces.m} 1rem;
  min-height: 100vh;
`;
