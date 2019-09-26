import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import { State } from '../store/initialState';

export default function HeaderContainer(): JSX.Element {
  const { userId } = useSelector((state: State) => state);
  const isLoggedIn = !!userId;
  return <Header isLoggedIn={isLoggedIn} />;
}
