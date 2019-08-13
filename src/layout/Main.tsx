import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from '../components/dashboard/Container';
import Expense from '../components/expense/';
import Tag from '../components/tag/Container';
import Account from '../components/account/Container';
import { spaces, headerSize } from '../consts';

const Main = styled.main`
  display: flex;
  padding: ${headerSize} ${spaces.m} ${spaces.m} ${spaces.m};
  min-height: 90vh;
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
