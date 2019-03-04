import React from 'react';
import { style } from 'glamor';

const SideNavMenu = ({ name }) => {
  const styles = style({
    padding: '5px',
    margin: '0',
    color: 'grey',
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
  });

  return <div {...styles}>{name}</div>;
};

export default SideNavMenu;
