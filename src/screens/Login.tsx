import React from 'react';
import { LoginUserFormContainer } from '../components/forms';
import { Center, Card } from '../components/ui';
import { WithHeading } from '../components/enhancer';

export default function Register(): JSX.Element {
  return (
    <Center>
      <Card width="325px">
        <WithHeading title="Log In">
          <LoginUserFormContainer />
        </WithHeading>
      </Card>
    </Center>
  );
}
