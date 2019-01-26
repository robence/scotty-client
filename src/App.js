import React, { Component } from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Sidenav from './components/sidenav';
import Content from './components/content';

class App extends Component {
  render() {
    const styles = `
      .main {
        display: grid;
        grid-template: "header header"
                        "sidebar  content"
                        "sidebar  footer";
        grid-template-rows:    100px auto 100px;
        grid-template-columns: 200px 1fr;
      }`

    return (
      <div className="main">
        <style>
          {styles}
        </style>
        <Header/>
        <Sidenav/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
