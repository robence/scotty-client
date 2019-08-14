import React from 'react';
import Presenter from './Presenter';
import { Category, Tag, Expense } from '../../types/model';



const categories: Category[] = [
  { id: 0, name: 'Category1' },
  { id: 1, name: 'Category2' },
  { id: 2, name: 'Category3' },
  { id: 3, name: 'Category4' },
  { id: 4, name: 'Category5' },
];

const tags: Tag[] = [
  { id: 0, name: 'Tag1' },
  { id: 1, name: 'Tag2' },
  { id: 2, name: 'Tag3' },
  { id: 3, name: 'Tag4' },
  { id: 4, name: 'Tag5' },
];

const expenses: Expense[] = [
  { id: 0, amount: 500, categoryId: 0, tagIds: [0, 1] },
  { id: 1, amount: 1500, categoryId: 1, tagIds: [2, 3, 4] },
  { id: 2, amount: 2500, categoryId: 3, tagIds: [4] },
  { id: 3, amount: 300, categoryId: 3, tagIds: [5] },
  { id: 4, amount: 200, categoryId: 0, tagIds: [1] },
  { id: 5, amount: 600, categoryId: 1, tagIds: [0] },
  { id: 6, amount: 100, categoryId: 1, tagIds: [0] },
  { id: 7, amount: 500, categoryId: 1, tagIds: [3] },
];

export default function DashboardComponent() {
  return <Presenter categories={categories} tags={tags} expenses={expenses} />;
}
