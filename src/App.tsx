import React from 'react';

import Header from './layout/Header';
import Main from './layout/Main';

export default function AppComponent(): JSX.Element {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
