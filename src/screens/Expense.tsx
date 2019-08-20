import React from 'react';
import Card from '../components/ui/Card';
import Centered from '../components/ui/Center';
import CreateExpenseFormContainer from '../components/forms/expense/CreateExpenseFormContainer';
import { WithHeading } from '../components/enhancer';

export default function Presenter() {
  return (
    <Centered>
      <Card width={'350px'}>
        <WithHeading title={'Add new transaction'}>
          <CreateExpenseFormContainer />
        </WithHeading>
      </Card>
    </Centered>
  );
}
