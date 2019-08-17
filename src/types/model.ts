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

export interface AccountList {
  [key: number]: Account;
}
