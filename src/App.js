import React, { Component } from 'react';

import Header from './layout/header';
import Sidenav from './layout/sidenav';
import Content from './layout/content';

const App = () => {
  const styles = `
      .main {
        display: grid;
        grid-template: "header header"
                        "sidebar  content"
                        "sidebar  content";
        grid-template-rows:    40px auto 100px;
        grid-template-columns: 200px 1fr;
      }`;

  return (
    <div className="main">
      <style>{styles}</style>
      <Header />
      <Sidenav />
      <Content />
    </div>
  );
};

export default App;
