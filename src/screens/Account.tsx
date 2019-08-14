import React from 'react';
import Card from '../components/ui/Card';
import CreateAndSelectAccountContainer from '../components/account/CreateAndSelectAccountContainer';
import WithHeading from '../components/enhancer/WithHeading';

export default function Container() {
  return (
    <Card>
      <WithHeading title={'Switch between accounts'}>
        <CreateAndSelectAccountContainer />
      </WithHeading>
    </Card>
  );
}
