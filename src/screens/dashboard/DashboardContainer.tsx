import React from 'react';
import Presenter from './DashboardPresenter';
import { Category, Tag, Expense } from '../../types/model';

const gen = (size: number, name: string) =>
  Array(size)
    .fill(null)
    .map((_, id) => ({ id, name: `${name}${id + 1}` }));

const categories: Category[] = gen(10, 'Category');
const tags: Tag[] = gen(10, 'Tag');

const expenses: Expense[] = [
  { amount: 500, categoryId: 0, tagIds: [0, 1] },
  { amount: 1500, categoryId: 1, tagIds: [2, 3, 4] },
  { amount: 2500, categoryId: 3, tagIds: [4] },
  { amount: 300, categoryId: 3, tagIds: [5] },
  { amount: 200, categoryId: 0, tagIds: [1] },
  { amount: 600, categoryId: 1, tagIds: [0] },
  { amount: 100, categoryId: 1, tagIds: [0] },
  { amount: 500, categoryId: 1, tagIds: [3] },
  { amount: 500, categoryId: 0, tagIds: [0, 1] },
  { amount: 1500, categoryId: 1, tagIds: [2, 3, 4] },
  { amount: 2500, categoryId: 3, tagIds: [4] },
  { amount: 300, categoryId: 3, tagIds: [5] },
  { amount: 200, categoryId: 0, tagIds: [1] },
  { amount: 600, categoryId: 4, tagIds: [0] },
  { amount: 100, categoryId: 3, tagIds: [0] },
  { amount: 500, categoryId: 6, tagIds: [3] },
  { amount: 500, categoryId: 0, tagIds: [0, 1] },
  { amount: 1500, categoryId: 1, tagIds: [2, 3, 4] },
  { amount: 2500, categoryId: 3, tagIds: [4] },
  { amount: 300, categoryId: 3, tagIds: [5] },
  { amount: 200, categoryId: 0, tagIds: [1] },
  { amount: 600, categoryId: 7, tagIds: [0] },
  { amount: 100, categoryId: 6, tagIds: [0] },
  { amount: 500, categoryId: 5, tagIds: [3] },
  { amount: 500, categoryId: 7, tagIds: [0, 1] },
  { amount: 1500, categoryId: 8, tagIds: [2, 3, 4] },
  { amount: 2500, categoryId: 9, tagIds: [4] },
  { amount: 300, categoryId: 8, tagIds: [5] },
  { amount: 200, categoryId: 8, tagIds: [1] },
  { amount: 600, categoryId: 8, tagIds: [0] },
  { amount: 100, categoryId: 8, tagIds: [0] },
  { amount: 500, categoryId: 9, tagIds: [3] },
  { amount: 500, categoryId: 7, tagIds: [0, 1] },
  { amount: 1500, categoryId: 5, tagIds: [2, 3, 4] },
  { amount: 2500, categoryId: 3, tagIds: [4] },
  { amount: 300, categoryId: 3, tagIds: [5] },
  { amount: 200, categoryId: 0, tagIds: [1] },
  { amount: 600, categoryId: 1, tagIds: [0] },
  { amount: 100, categoryId: 1, tagIds: [0] },
  { amount: 500, categoryId: 1, tagIds: [3] },
  { amount: 500, categoryId: 0, tagIds: [0, 1] },
  { amount: 1500, categoryId: 1, tagIds: [2, 3, 4] },
  { amount: 2500, categoryId: 3, tagIds: [4] },
  { amount: 300, categoryId: 3, tagIds: [5] },
  { amount: 200, categoryId: 0, tagIds: [1] },
  { amount: 600, categoryId: 1, tagIds: [0] },
  { amount: 100, categoryId: 1, tagIds: [0] },
  { amount: 500, categoryId: 1, tagIds: [3] },
  { amount: 500, categoryId: 0, tagIds: [0, 1] },
  { amount: 1500, categoryId: 1, tagIds: [2, 3, 4] },
  { amount: 2500, categoryId: 3, tagIds: [4] },
  { amount: 300, categoryId: 3, tagIds: [5] },
  { amount: 200, categoryId: 0, tagIds: [1] },
  { amount: 600, categoryId: 1, tagIds: [0] },
  { amount: 100, categoryId: 1, tagIds: [0] },
  { amount: 500, categoryId: 1, tagIds: [3] },
  { amount: 500, categoryId: 0, tagIds: [0, 1] },
  { amount: 1500, categoryId: 1, tagIds: [2, 3, 4] },
  { amount: 2500, categoryId: 3, tagIds: [4] },
  { amount: 300, categoryId: 3, tagIds: [5] },
  { amount: 200, categoryId: 0, tagIds: [1] },
  { amount: 600, categoryId: 1, tagIds: [0] },
  { amount: 100, categoryId: 1, tagIds: [0] },
  { amount: 500, categoryId: 1, tagIds: [3] },
].map((x, id) => ({ ...x, id }));

export default function DashboardComponent() {
  return <Presenter categories={categories} tags={tags} expenses={expenses} />;
  // return <Caro />;
}
