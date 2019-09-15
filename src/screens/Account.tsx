import React from 'react';
import { Card, Center } from '../components/ui';
import { CreateAndSelectAccountFormContainer } from '../components/forms';
import { WithHeading } from '../components/enhancer';
import text from '../i18n';

export default function Account(): JSX.Element {
  return (
    <Center>
      <Card width="325px">
        <WithHeading title={text.screens.account.title}>
          <CreateAndSelectAccountFormContainer />
        </WithHeading>
      </Card>
    </Center>
  );
}
