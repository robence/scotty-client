type Base = {
  id: number;
  name: string;
};

type MapObj<T> = { [key: number]: T };

export type Tag = Base;
export type Category = Base;
export type Account = Base;
export type Period = Base;

export type Expense = {
  id: number;
  amount: number;
  categoryId: number;
  tagIds: number[];
  accountId: number;
};

export type TagList = {
  byIds: { [key: number]: Tag };
  byNames: { [key: string]: Tag };
};

export type CategoryList = { [key: number]: Account };
export type ExpenseList = { [key: number]: Expense };
export type AccountList = { [key: number]: Account };
export type PeriodList = { [key: number]: Account };
