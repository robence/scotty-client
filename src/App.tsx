import React from 'react';
import styled from 'styled-components';

import Header from './layout/Header';
import Dashboard from './layout/Dashboard';

export default function AppComponent() {
  const Layout = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    border: 0;
    padding: 0;

    & > div {
      margin: 0;
      border: 0;
    }
  `;

  return (
    <Layout>
      <Header />
      <Dashboard />
    </Layout>
  );
}
