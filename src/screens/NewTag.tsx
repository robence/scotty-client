import React from 'react';
import { Card, Center } from '../components/ui';
import { CreateTagFormContainer } from '../components/forms';
import { WithHeading } from '../components/enhancer';

export default function Container(): JSX.Element {
  return (
    <Center>
      <Card width="325px">
        <WithHeading title="Create a new tag">
          <CreateTagFormContainer />
        </WithHeading>
      </Card>
    </Center>
  );
}
