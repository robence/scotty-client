import React from 'react';
import PropTypes from 'prop-types';
export default function (props) {

  const styles = {
    display: 'inline-block',
    minWidth: '50px',
    backgroundColor: '#4de03a',
    gridArea: 'sidebar'
  };

  return (
    <div className="sidenav" style={styles}>
      <div>Menu 1</div>
      <div>Menu 2</div>
      <div>Menu 3</div>
      <div>Menu 4</div>
    </div>
  );
}
