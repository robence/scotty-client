import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoginUserFormContainer } from '../components/forms';
import { Center, Card } from '../components/ui';
import { WithHeading } from '../components/enhancer';
import { State } from '../store/initialState';
import { useLang } from '../hooks';

function Login(): JSX.Element {
  const { screens } = useLang();

  return (
    <Center>
      <Card width="325px">
        <WithHeading title={screens.login.title}>
          <LoginUserFormContainer />
        </WithHeading>
      </Card>
    </Center>
  );
}

export default function LoginContainer(): JSX.Element {
  const { userId } = useSelector((state: State) => state);
  const isLoggedIn = !!userId;
  return isLoggedIn ? <Redirect to={{ pathname: '/' }} /> : <Login />;
}
