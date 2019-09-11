import React from 'react';
import { Card, Center } from '../components/ui';
import { CreateAndSelectAccountFormContainer } from '../components/forms';
import { WithHeading } from '../components/enhancer';

export default function Container(): JSX.Element {
  return (
    <Center>
      <Card width="325px">
        <WithHeading title="Create or Select account">
          <CreateAndSelectAccountFormContainer />
        </WithHeading>
      </Card>
    </Center>
  );
}
