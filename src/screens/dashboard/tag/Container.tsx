import React from 'react';
import Presenter from './Presenter';

type DashboardType = {
  tags: any;
  expenses: any;
  categories: any;
};

export default function Container({
  tags,
  expenses,
  categories,
}: DashboardType) {
  return <Presenter categories={categories} tags={tags} expenses={expenses} />;
}
