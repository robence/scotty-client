import React from 'react';
import Card from '../components/ui/Card';
import Centered from '../components/ui/Center';
import CreateAndSelectAccountContainer from '../components/forms/account/CreateAndSelectAccountFormContainer';
import WithHeading from '../components/enhancer/WithHeading';

export default function Container() {
  return (
    <Centered>
      <Card width={'325px'}>
        <WithHeading title={'Create or Select account'}>
          <CreateAndSelectAccountContainer />
        </WithHeading>
      </Card>
    </Centered>
  );
}
