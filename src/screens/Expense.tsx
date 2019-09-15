import React from 'react';
import { Center, Align, Card } from '../components/ui';
import { WithHeading } from '../components/enhancer';
import { CreateExpenseFormContainer } from '../components/forms';
import CommonExpensesListContainer from '../components/list';
import text from '../i18n';

export default function ExpenseComponent(): JSX.Element {
  return (
    <Center>
      <Align content="evenly">
        <Card width="350px">
          <WithHeading title={text.screens.expense.new}>
            <CreateExpenseFormContainer />
          </WithHeading>
        </Card>
        <Card width="60%">
          <WithHeading title={text.screens.expense.common}>
            <CommonExpensesListContainer />
          </WithHeading>
        </Card>
      </Align>
    </Center>
  );
}
