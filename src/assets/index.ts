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

const DAY_IN_MINUTES = 24 * 60;
const WEEK_IN_MINUTES = 7 * DAY_IN_MINUTES;
export const MONTH_IN_MINUTES = 30 * DAY_IN_MINUTES;
const YEAR_IN_MINUTES = 365 * DAY_IN_MINUTES;

const createDate = (differenceInMinutes: number): Date => {
  const tempDate = new Date();
  tempDate.setMinutes(tempDate.getMinutes() + differenceInMinutes);
  return tempDate;
}
export const periodList: PeriodList = objectify([
  { id: DAY_IN_MINUTES, name: 'Last day' },
  { id: WEEK_IN_MINUTES, name: 'Last 7 days' },
  { id: MONTH_IN_MINUTES, name: 'Last 30 days' },
  { id: YEAR_IN_MINUTES, name: 'Last 365 days' },
  { id: -1, name: 'Full history' },
]);

export const expenses: ExpenseList = objectify(
  [
    { amount: -500, createdTs: createDate(-1 * DAY_IN_MINUTES * 0), categoryId: 0, accountId: 0, tagIds: [0, 1] },
    { amount: -1500, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [2, 3, 4] },
    { amount: 25000, createdTs: createDate(-1 * DAY_IN_MINUTES * 3), categoryId: 3, accountId: 3, tagIds: [4] },
    { amount: -300, createdTs: createDate(-1 * DAY_IN_MINUTES * 3), categoryId: 3, accountId: 3, tagIds: [5] },
    { amount: 200, createdTs: createDate(-1 * DAY_IN_MINUTES * 0), categoryId: 0, accountId: 0, tagIds: [1] },
    { amount: -600, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: -100, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: 500, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [3] },
    { amount: -500, createdTs: createDate(-1 * DAY_IN_MINUTES * 0), categoryId: 0, accountId: 0, tagIds: [0, 1] },
    { amount: -1500, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [2, 3, 4] },
    { amount: 2500, createdTs: createDate(-1 * DAY_IN_MINUTES * 3), categoryId: 3, accountId: 3, tagIds: [4] },
    { amount: -300, createdTs: createDate(-1 * DAY_IN_MINUTES * 3), categoryId: 3, accountId: 3, tagIds: [5] },
    { amount: -200, createdTs: createDate(-1 * DAY_IN_MINUTES * 0), categoryId: 0, accountId: 0, tagIds: [1] },
    { amount: 600, createdTs: createDate(-1 * DAY_IN_MINUTES * 4), categoryId: 4, accountId: 4, tagIds: [0] },
    { amount: -100, createdTs: createDate(-1 * DAY_IN_MINUTES * 3), categoryId: 3, accountId: 3, tagIds: [0] },
    { amount: -500, createdTs: createDate(-1 * DAY_IN_MINUTES * 6), categoryId: 6, accountId: 6, tagIds: [3] },
    { amount: -500, createdTs: createDate(-1 * DAY_IN_MINUTES * 0), categoryId: 0, accountId: 0, tagIds: [0, 1] },
    { amount: -1500, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [2, 3, 4] },
    { amount: -2500, createdTs: createDate(-1 * DAY_IN_MINUTES * 3), categoryId: 3, accountId: 3, tagIds: [4] },
    { amount: -300, createdTs: createDate(-1 * DAY_IN_MINUTES * 3), categoryId: 3, accountId: 3, tagIds: [5] },
    { amount: -200, createdTs: createDate(-1 * DAY_IN_MINUTES * 0), categoryId: 0, accountId: 0, tagIds: [1] },
    { amount: -600, createdTs: createDate(-1 * DAY_IN_MINUTES * 7), categoryId: 7, accountId: 7, tagIds: [0] },
    { amount: 100, createdTs: createDate(-1 * DAY_IN_MINUTES * 6), categoryId: 6, accountId: 6, tagIds: [0] },
    { amount: -500, createdTs: createDate(-1 * DAY_IN_MINUTES * 5), categoryId: 5, accountId: 5, tagIds: [3] },
    { amount: -500, createdTs: createDate(-1 * DAY_IN_MINUTES * 7), categoryId: 7, accountId: 7, tagIds: [0, 1] },
    { amount: -1500, createdTs: createDate(-1 * DAY_IN_MINUTES * 8), categoryId: 8, accountId: 8, tagIds: [2, 3, 4] },
    { amount: 2500, createdTs: createDate(-1 * DAY_IN_MINUTES * 9), categoryId: 9, accountId: 9, tagIds: [4] },
    { amount: -300, createdTs: createDate(-1 * DAY_IN_MINUTES * 8), categoryId: 8, accountId: 8, tagIds: [5] },
    { amount: -200, createdTs: createDate(-1 * DAY_IN_MINUTES * 8), categoryId: 8, accountId: 8, tagIds: [1] },
    { amount: 6000, createdTs: createDate(-1 * DAY_IN_MINUTES * 8), categoryId: 8, accountId: 8, tagIds: [0] },
    { amount: -100, createdTs: createDate(-1 * DAY_IN_MINUTES * 8), categoryId: 8, accountId: 8, tagIds: [0] },
    { amount: -500, createdTs: createDate(-1 * DAY_IN_MINUTES * 9), categoryId: 9, accountId: 9, tagIds: [3] },
    { amount: 500, createdTs: createDate(-1 * DAY_IN_MINUTES * 7), categoryId: 7, accountId: 7, tagIds: [0, 1] },
    { amount: -1500, createdTs: createDate(-1 * DAY_IN_MINUTES * 5), categoryId: 5, accountId: 5, tagIds: [2, 3, 4] },
    { amount: -2500, createdTs: createDate(-1 * DAY_IN_MINUTES * 3), categoryId: 3, accountId: 3, tagIds: [4] },
    { amount: 300, createdTs: createDate(-1 * DAY_IN_MINUTES * 3), categoryId: 3, accountId: 3, tagIds: [5] },
    { amount: -200, createdTs: createDate(-1 * DAY_IN_MINUTES * 0), categoryId: 0, accountId: 0, tagIds: [1] },
    { amount: 600, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: -100, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: 500, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [3] },
    { amount: -500, createdTs: createDate(-1 * DAY_IN_MINUTES * 0), categoryId: 0, accountId: 0, tagIds: [0, 1] },
    { amount: 1500, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [1, 3, 4] },
    { amount: -2500, createdTs: createDate(-1 * DAY_IN_MINUTES * 3), categoryId: 3, accountId: 3, tagIds: [4] },
    { amount: 300, createdTs: createDate(-1 * DAY_IN_MINUTES * 3), categoryId: 3, accountId: 3, tagIds: [5] },
    { amount: -200, createdTs: createDate(-1 * DAY_IN_MINUTES * 0), categoryId: 0, accountId: 0, tagIds: [1] },
    { amount: -600, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: -100, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: 5000, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [3] },
    { amount: -500, createdTs: createDate(-1 * DAY_IN_MINUTES * 0), categoryId: 0, accountId: 0, tagIds: [0, 1] },
    { amount: -1500, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [2, 6, 4] },
    { amount: -2500, createdTs: createDate(-1 * DAY_IN_MINUTES * 3), categoryId: 3, accountId: 3, tagIds: [4] },
    { amount: -300, createdTs: createDate(-1 * DAY_IN_MINUTES * 3), categoryId: 3, accountId: 3, tagIds: [5] },
    { amount: -200, createdTs: createDate(-1 * DAY_IN_MINUTES * 0), categoryId: 0, accountId: 0, tagIds: [1] },
    { amount: -600, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [4, 3, 2] },
    { amount: -100, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: -500, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [3] },
    { amount: -500, createdTs: createDate(-1 * DAY_IN_MINUTES * 0), categoryId: 0, accountId: 0, tagIds: [0, 1] },
    { amount: -1500, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [2, 3, 4] },
    { amount: -2500, createdTs: createDate(-1 * DAY_IN_MINUTES * 3), categoryId: 3, accountId: 3, tagIds: [4] },
    { amount: -300, createdTs: createDate(-1 * DAY_IN_MINUTES * 3), categoryId: 3, accountId: 3, tagIds: [5] },
    { amount: -200, createdTs: createDate(-1 * DAY_IN_MINUTES * 0), categoryId: 0, accountId: 0, tagIds: [1] },
    { amount: -600, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: -100, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [0] },
    { amount: -500, createdTs: createDate(-1 * DAY_IN_MINUTES * 1), categoryId: 1, accountId: 1, tagIds: [3] },
  ].map((x, id) => ({ ...x, id })),
);
