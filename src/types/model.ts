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

export interface Account {
  id: number;
  name: string;
}

export type TagList = {
  [key: number]: Tag;
};

export type CategoryList = {
  [key: number]: Account;
};

export type ExpenseList = {
  [key: number]: Expense;
};

export interface AccountList {
  [key: number]: Account;
}
