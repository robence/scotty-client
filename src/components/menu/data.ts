import { IMenuItem, IIterable } from '../../types';

const items: (IMenuItem & IIterable)[] = [
  { id: 0, title: 'Dashboard' },
  { id: 1, title: 'Expenses' },
  { id: 2, title: 'MenuItem3' },
  { id: 3, title: 'Menuitem4' },
  { id: 4, title: 'Account', className: 'pull-right' },
  { id: 5, title: 'Settings' },
];

export default items;
