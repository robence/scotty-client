import React from 'react';
import { Card, Center } from '../components/ui';
import { CreateTagFormContainer } from '../components/forms';
import { WithHeading } from '../components/enhancer';
import text from '../i18n';

export default function Container(): JSX.Element {
  return (
    <Center>
      <Card width="400px">
        <WithHeading title={text.screens.tag.title}>
          <CreateTagFormContainer />
        </WithHeading>
      </Card>
    </Center>
  );
}
