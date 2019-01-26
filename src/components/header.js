import React from 'react';
import PropTypes from 'prop-types';
export default function (props) {

  const styles = {
      backgroundColor: '#4286f4',
      gridArea: 'header'
    };

  return (
    <div className="header" style={styles}>
      Header
    </div>
  );
}
