import React from 'react';
import { style } from 'glamor';

const Button = ({ title, handleChange, icon }) => {
  const styles = style({
    borderRight: 'solid 1px grey',
    margin: '0',
    padding: '5px',
    color: 'white',
    fontWeight: 'bold',
    ':hover': {
      backgroundColor: 'rgb(46, 121, 242)',
    },
  });

  return <div {...styles}>{title}</div>;
};

export default Button;
