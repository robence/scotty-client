import React from 'react';
import { IMenuItem } from '../../types';

export default function MenuItem({ title, className }: IMenuItem): JSX.Element {
  return <li className={className}>{title}</li>;
}
