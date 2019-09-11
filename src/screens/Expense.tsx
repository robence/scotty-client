import React from 'react';
import { Center, Align, Card } from '../components/ui';
import { WithHeading } from '../components/enhancer';
import { CreateExpenseFormContainer } from '../components/forms';
import CommonExpensesListContainer from '../components/list';

export default function ExpenseComponent(): JSX.Element {
  return (
    <Center>
      <Align content="evenly">
        <Card width="350px">
          <WithHeading title="Add New Transaction">
            <CreateExpenseFormContainer />
          </WithHeading>
        </Card>
        <Card width="60%">
          <WithHeading title="Add Common Transaction">
            <CommonExpensesListContainer />
          </WithHeading>
        </Card>
      </Align>
    </Center>
  );
}
