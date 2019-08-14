import React from 'react';
import Card from '../../../components/ui/Card';
import WithHeading from '../../../components/enhancer/WithHeading';

type DashboardType = {
  tags: any;
  expenses: any;
  categories: any;
};

export default function PresenterComponent({
  tags,
  expenses,
  categories,
}: DashboardType) {
  return (
    <Card>
      <WithHeading title={'Expenses by tags'}>
        <div></div>
      </WithHeading>
    </Card>
  );
}
