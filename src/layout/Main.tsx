import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import {
  Expense,
  Tag,
  Account,
  Dashboard,
  Register,
  Login,
  Logout,
} from '../screens';

import { spaces, headerSize } from '../consts';
import { PrivateRoute } from '../auth';

export default function MainComponent(): JSX.Element {
  return (
    <Main>
      <Switch>
        <PrivateRoute path="/" exact component={Dashboard} />
        <PrivateRoute path="/expense" component={Expense} />
        <PrivateRoute path="/tag" component={Tag} />
        <PrivateRoute path="/account" component={Account} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/logout" component={Logout} />
      </Switch>
    </Main>
  );
}

const Main = styled.main`
  padding: calc(${headerSize} + 1rem) ${spaces.m} 1rem;
  min-height: 100vh;
`;
