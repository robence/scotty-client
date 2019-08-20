import { generateArray, generateObject, objectify } from '../utils';
import {
  CategoryList,
  TagList,
  ExpenseList,
  AccountList,
  PeriodList,
} from '../types/model';

export const categories: CategoryList = generateArray(10, 'Category');
export const tagArray = generateArray(10, 'Tag');
export const tags: TagList = {
  byIds: objectify(tagArray, 'id'),
  byNames: objectify(tagArray, 'name'),
};

export const accountList: AccountList = generateObject(10, 'Account');

export const periodList: PeriodList = objectify([
  { id: 0, name: 'Last day' },
  { id: 1, name: 'Last week' },
  { id: 2, name: 'Last month' },
  { id: 3, name: 'Last year' },
  { id: 4, name: 'Whole history' },
]);

export const expenses: ExpenseList = objectify(
  [
    { amount: -500, categoryId: 0, accountId: 0, tagIds: [0, 1] },
    { amount: -1500, categoryId: 1, accountId: 1, tagIds: [2, 3, 4] },
    { amount: 25000, categoryId: 3, accountId: 3, tagIds: [4] },
    { amount: -300, categoryId: 3, accountId: 3, tagIds: [5] },
    { amount: 200, categoryId: 0, accountId: 0, tagIds: [1] },
    { amount: -600, categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: -100, categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: 500, categoryId: 1, accountId: 1, tagIds: [3] },
    { amount: -500, categoryId: 0, accountId: 0, tagIds: [0, 1] },
    { amount: -1500, categoryId: 1, accountId: 1, tagIds: [2, 3, 4] },
    { amount: 2500, categoryId: 3, accountId: 3, tagIds: [4] },
    { amount: -300, categoryId: 3, accountId: 3, tagIds: [5] },
    { amount: -200, categoryId: 0, accountId: 0, tagIds: [1] },
    { amount: 600, categoryId: 4, accountId: 4, tagIds: [0] },
    { amount: -100, categoryId: 3, accountId: 3, tagIds: [0] },
    { amount: -500, categoryId: 6, accountId: 6, tagIds: [3] },
    { amount: -500, categoryId: 0, accountId: 0, tagIds: [0, 1] },
    { amount: -1500, categoryId: 1, accountId: 1, tagIds: [2, 3, 4] },
    { amount: -2500, categoryId: 3, accountId: 3, tagIds: [4] },
    { amount: -300, categoryId: 3, accountId: 3, tagIds: [5] },
    { amount: -200, categoryId: 0, accountId: 0, tagIds: [1] },
    { amount: -600, categoryId: 7, accountId: 7, tagIds: [0] },
    { amount: 100, categoryId: 6, accountId: 6, tagIds: [0] },
    { amount: -500, categoryId: 5, accountId: 5, tagIds: [3] },
    { amount: -500, categoryId: 7, accountId: 7, tagIds: [0, 1] },
    { amount: -1500, categoryId: 8, accountId: 8, tagIds: [2, 3, 4] },
    { amount: 2500, categoryId: 9, accountId: 9, tagIds: [4] },
    { amount: -300, categoryId: 8, accountId: 8, tagIds: [5] },
    { amount: -200, categoryId: 8, accountId: 8, tagIds: [1] },
    { amount: 6000, categoryId: 8, accountId: 8, tagIds: [0] },
    { amount: -100, categoryId: 8, accountId: 8, tagIds: [0] },
    { amount: -500, categoryId: 9, accountId: 9, tagIds: [3] },
    { amount: 500, categoryId: 7, accountId: 7, tagIds: [0, 1] },
    { amount: -1500, categoryId: 5, accountId: 5, tagIds: [2, 3, 4] },
    { amount: -2500, categoryId: 3, accountId: 3, tagIds: [4] },
    { amount: 300, categoryId: 3, accountId: 3, tagIds: [5] },
    { amount: -200, categoryId: 0, accountId: 0, tagIds: [1] },
    { amount: 600, categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: -100, categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: 500, categoryId: 1, accountId: 1, tagIds: [3] },
    { amount: -500, categoryId: 0, accountId: 0, tagIds: [0, 1] },
    { amount: 1500, categoryId: 1, accountId: 1, tagIds: [1, 3, 4] },
    { amount: -2500, categoryId: 3, accountId: 3, tagIds: [4] },
    { amount: 300, categoryId: 3, accountId: 3, tagIds: [5] },
    { amount: -200, categoryId: 0, accountId: 0, tagIds: [1] },
    { amount: -600, categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: -100, categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: 5000, categoryId: 1, accountId: 1, tagIds: [3] },
    { amount: -500, categoryId: 0, accountId: 0, tagIds: [0, 1] },
    { amount: -1500, categoryId: 1, accountId: 1, tagIds: [2, 6, 4] },
    { amount: -2500, categoryId: 3, accountId: 3, tagIds: [4] },
    { amount: -300, categoryId: 3, accountId: 3, tagIds: [5] },
    { amount: -200, categoryId: 0, accountId: 0, tagIds: [1] },
    { amount: -600, categoryId: 1, accountId: 1, tagIds: [4, 3, 2] },
    { amount: -100, categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: -500, categoryId: 1, accountId: 1, tagIds: [3] },
    { amount: -500, categoryId: 0, accountId: 0, tagIds: [0, 1] },
    { amount: -1500, categoryId: 1, accountId: 1, tagIds: [2, 3, 4] },
    { amount: -2500, categoryId: 3, accountId: 3, tagIds: [4] },
    { amount: -300, categoryId: 3, accountId: 3, tagIds: [5] },
    { amount: -200, categoryId: 0, accountId: 0, tagIds: [1] },
    { amount: -600, categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: -100, categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: -500, categoryId: 1, accountId: 1, tagIds: [3] },
  ].map((x, id) => ({ ...x, id })),
);
