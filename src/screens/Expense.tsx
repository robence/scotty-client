import React from 'react';
import Card from '../components/ui/Card';
import Centered from '../components/ui/Centered';
import CreateExpenseFormContainer from '../components/forms/expense/CreateExpenseFormContainer';
import { WithHeading } from '../components/enhancer';

export default function Presenter() {
  return (
    <Centered>
      <Card>
        <WithHeading title={'Add new transaction'}>
          <CreateExpenseFormContainer />
        </WithHeading>
      </Card>
    </Centered>
  );
}
