import React from 'react';
import Card from '../components/ui/Card';
import CreateExpenseFormContainer from '../components/forms/expense/CreateExpenseFormContainer';
import { WithHeading } from '../components/enhancer';

export default function Presenter() {
  return (
    <Card>
      <WithHeading title={'Add new transaction'}>
        <CreateExpenseFormContainer />
      </WithHeading>
    </Card>
  );
}
