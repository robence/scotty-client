import React from 'react';
import SideNavMenu from '../../components/sidenav/SideNavMenu';

const SideNavMenuBar = () => {
  const cStyles = {
    display: 'grid',
    gridAutoFlow: 'row',
    padding: '10px',
    gridArea: 'sidebar',
  };

  const getMenuBarData = () => {
    const data = [
      'Feed',
      'Expenses',
      'Accounts',
      'Categories',
      'Tags',
      'Templates',
      'Widgets',
    ];

    return data.map((name) => <SideNavMenu key={name} name={name} />);
  };

  // return <div style={cStyles} />;
  return <div style={cStyles}>{getMenuBarData()}</div>;
};

export default SideNavMenuBar;
