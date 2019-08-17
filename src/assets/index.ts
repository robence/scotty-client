import { gen, genObj, objectify } from '../utils';
import {
  Category,
  Tag,
  ExpenseList,
  Account,
  AccountList,
} from '../types/model';

export const categories: Category[] = gen(10, 'Category');
export const tags: Tag[] = gen(10, 'Tag');
export const accountList: AccountList = genObj(10, 'Account');

console.log('accountList');
console.log(accountList);

export const selectedAccount: Account = accountList[0];

export const expenses: ExpenseList = objectify(
  [
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
    { amount: 1500, categoryId: 1, tagIds: [1, 3, 4] },
    { amount: 2500, categoryId: 3, tagIds: [4] },
    { amount: 300, categoryId: 3, tagIds: [5] },
    { amount: 200, categoryId: 0, tagIds: [1] },
    { amount: 600, categoryId: 1, tagIds: [0] },
    { amount: 100, categoryId: 1, tagIds: [0] },
    { amount: 500, categoryId: 1, tagIds: [3] },
    { amount: 500, categoryId: 0, tagIds: [0, 1] },
    { amount: 1500, categoryId: 1, tagIds: [2, 6, 4] },
    { amount: 2500, categoryId: 3, tagIds: [4] },
    { amount: 300, categoryId: 3, tagIds: [5] },
    { amount: 200, categoryId: 0, tagIds: [1] },
    { amount: 600, categoryId: 1, tagIds: [4, 3, 2] },
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
  ].map((x, id) => ({ ...x, id })),
);
