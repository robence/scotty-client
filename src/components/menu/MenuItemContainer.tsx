import React from 'react';

import MenuItemList from './MenuItemList';
import items from './data';

export default function MenuItemContainer({ className }: any): JSX.Element {
  return (
    <nav role="navigation" className={className}>
      <MenuItemList items={items} />
    </nav>
  );
}
