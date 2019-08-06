import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../layout/Header';
import Main from '../layout/Main';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}
