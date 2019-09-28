import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Main } from './layout';
import configureMessage from './configs/message';
import { TokenHandler } from './auth';

configureMessage();

export default function AppComponent(): JSX.Element {
  return (
    <App>
      <BrowserRouter>
        <TokenHandler />
        <Header />
        <Main />
      </BrowserRouter>
    </App>
  );
}

const App = styled.div`
  background-color: rgb(224, 223, 223);
  height: inherit;
`;
