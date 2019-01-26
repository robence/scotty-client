import React from 'react';
import PropTypes from 'prop-types';
export default function (props) {

  const styles = {
      backgroundColor: '#e53a06',
      gridArea: 'content'
    };

  return (
    <div className="content" style={styles}>
      Hello
    </div>
  );
}
