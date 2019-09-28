import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../store/initialState';
import {
  Dashboard,
  Expense,
  Logout,
  Account,
  Login,
  Register,
  Tag,
} from '../screens';

export default function PrivateRoute({ component, ...rest }: any): JSX.Element {
  const { userId } = useSelector((state: State) => state);

  const goToLogin = ({ location }: RouteComponentProps): JSX.Element => (
    <Redirect to={{ pathname: '/login', state: { from: location } }} />
  );

  const render = (props: RouteComponentProps): JSX.Element => {
    if (!userId) {
      return goToLogin(props);
    }

    switch (props.match.url) {
      case '/':
        return <Dashboard {...props} />;
      case '/expense':
        return <Expense />;
      case '/tag':
        return <Tag />;
      case '/account':
        return <Account />;
      case '/login':
        return <Login />;
      case '/register':
        return <Register />;
      case '/logout':
        return <Logout />;
      default:
        return goToLogin(props);
    }
  };

  return <Route {...rest} render={render} />;
}
