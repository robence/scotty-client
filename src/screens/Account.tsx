import React from 'react';
import { Card, Center } from '../components/ui';
import { CreateAndSelectAccountFormContainer } from '../components/forms';
import { WithHeading } from '../components/enhancer';
import { useLang } from '../hooks';

export default function Account(): JSX.Element {
  const text = useLang();

  return (
    <Center>
      <Card width="400px">
        <WithHeading title={text.screens.account.title}>
          <CreateAndSelectAccountFormContainer />
        </WithHeading>
      </Card>
    </Center>
  );
}
