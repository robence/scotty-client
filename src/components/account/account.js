import React from 'react';
import { style } from 'glamor';

export default function({ name }) {
  const styles = style({
    display: 'grid',
    alignContent: 'center',
    textAlign: 'center',
    border: '1px solid black',
    margin: '0',
    color: 'grey',
    height: '100px',
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
  });

  return <p {...styles}>{name}</p>;
}
