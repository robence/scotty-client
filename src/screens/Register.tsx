import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CreateUserFormContainer } from '../components/forms';
import { Center, Card } from '../components/ui';
import { WithHeading } from '../components/enhancer';
import { State } from '../store/initialState';
import { useLang } from '../hooks';

function Register(): JSX.Element {
  const text = useLang();

  return (
    <Center>
      <Card width="325px">
        <WithHeading title={text.screens.register.title}>
          <CreateUserFormContainer />
        </WithHeading>
      </Card>
    </Center>
  );
}

export default function RegisterContainer(): JSX.Element {
  const { userId } = useSelector((state: State) => state);
  const isLoggedIn = !!userId;
  return isLoggedIn ? <Redirect to={{ pathname: '/' }} /> : <Register />;
}
