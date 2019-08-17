import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './layout/Header';
import Main from './layout/Main';
import styled from 'styled-components';
import { message } from 'antd';

message.config({
  top: 60,
  duration: 2,
});

const App = styled.div`
  background-color: rgb(224, 223, 223);
  height: inherit;
`;
export default function AppComponent(): JSX.Element {
  return (
    <App>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </App>
  );
}
