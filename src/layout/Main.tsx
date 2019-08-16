import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Expense, Tag, Account, Dashboard } from '../screens';
import { spaces, headerSize } from '../consts';

const Main = styled.main`
  /* display: flex; */
  padding: ${spaces.m};
  padding-top: ${headerSize};
  min-height: 96vh;
`;

export default function MainComponent(): JSX.Element {
  return (
    <Main>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/expense" component={Expense} />
        <Route path="/tag" component={Tag} />
        <Route path="/account" component={Account} />
      </Switch>
    </Main>
  );
}
