import React from 'react';
import styled from 'styled-components';

// import Header from './layout/Header';
// import Sidenav from './layout/SideNav';
// import Content from './layout/Content';

export default function AppComponent() {
  const Div = styled.div`
    display: grid;
    grid-template:
      'header header'
      'sidebar  content'
      'sidebar  content';
    grid-template-rows: 40px auto 100px;
    grid-template-columns: 200px 1fr;
  `;

  return <Div />;
}
