import React from 'react';
import Card from '../components/ui/Card';
import Centered from '../components/ui/Centered';
import CreateAndSelectAccountContainer from '../components/forms/account/CreateAndSelectAccountFormContainer';
import WithHeading from '../components/enhancer/WithHeading';

export default function Container() {
  return (
    <Centered>
      <Card>
        <WithHeading title={'Switch between accounts'}>
          <CreateAndSelectAccountContainer />
        </WithHeading>
      </Card>
    </Centered>
  );
}
