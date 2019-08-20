export type Tag = {
  id: number;
  name: string;
};

export type Category = {
  id: number;
  name: string;
};

export type Expense = {
  id: number;
  amount: number;
  categoryId: number;
  tagIds: number[];
};

export type Account = {
  id: number;
  name: string;
};

export type TagList = {
  byIds: { [key: number]: Tag };
  byNames: { [key: string]: Tag };
};
export type CategoryList = { [key: number]: Account };
export type ExpenseList = { [key: number]: Expense };
export type AccountList = { [key: number]: Account };
