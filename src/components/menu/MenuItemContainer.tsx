import React from 'react';

import MenuItemList from './MenuItemList';
import items from './data';

export default function MenuItemContainer(): JSX.Element {
  return (
    <nav role="navigation">
      <MenuItemList items={items} />
    </nav>
  );
}
