import React from 'react';
import Card from '../components/ui/Card';
import CreateTagContainer from '../components/input/tag/CreateTagContainer';
import WithHeading from '../components/enhancer/WithHeading';

export default function Container() {
  return (
    <Card>
      <WithHeading title={'Create a new tag'}>
        <CreateTagContainer />
      </WithHeading>
    </Card>
  );
}
