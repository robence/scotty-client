import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from './layout/Header';
import Main from './layout/Main';
import configureMessage from './configs/message';
import LoadInitialState from './temp/LoadInitialState';

configureMessage();

export default function AppComponent(): JSX.Element {
  return (
    <App>
      <BrowserRouter>
        <LoadInitialState>
          <Header />
          <Main />
        </LoadInitialState>
      </BrowserRouter>
    </App>
  );
}

const App = styled.div`
  background-color: rgb(224, 223, 223);
  height: inherit;
`;
