import React from 'react';
import Presenter from './Presenter';
import { DashboardType } from '../../../types/model';


export default function Container({
  tags,
  expenses,
  categories,
}: DashboardType) {
  return <Presenter categories={categories} tags={tags} expenses={expenses} />;
}
