import React from 'react';

import MenuItem from './MenuItem';
import { IMenuItem, IIterable } from '../../types';

function createItems(items: (IMenuItem & IIterable)[]): JSX.Element[] {
  return items.map(
    ({ id, title, className }: IMenuItem & IIterable): JSX.Element => (
      <MenuItem key={id} title={title} className={className} />
    ),
  );
}

export default function MenuItemList({
  items,
}: {
  items: (IMenuItem & IIterable)[];
}): JSX.Element {
  return <ul>{createItems(items)}</ul>;
}
