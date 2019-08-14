import React from 'react';
import Card from '../../ui/Card';
import WithHeading from '../../enhancer/WithHeading';

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
      <WithHeading title={'Expenses by tags'} />
    </Card>
  );
}
