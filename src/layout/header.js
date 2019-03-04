import React from 'react';
import { Left, Right } from './header/';

const Header = () => {
  const styles = {
    gridArea: 'header',
    backgroundColor: '#4286f4',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  };

  return (
    <div style={styles}>
      <Left />
      <Right />
    </div>
  );
};

export default Header;
