export type Base = {
  _id: string;
  name: string;
};

export type Tag = Base;
export type Category = Base;
export type Account = Base;
export type Period = Base;

export type User = {
  _id: string;
  username: string;
  email: string;
  tags: Tag[];
  accounts: Account[];
};

export type ExpensePost = {
  amount: number;
  categoryId: string;
  tagIds: string[];
  accountId: string;
  createdAt: Date;
};
export type Expense = {
  _id: string;
} & ExpensePost;

export type ExpensePopulated = {
  amount: number;
  category: Category;
  tags: Tag[];
};

export type TagList = {
  byIds: { [key: string]: Tag };
  byNames: { [key: string]: Tag };
};

export type CategoryList = { [key: string]: Category };
export type ExpenseList = { [key: string]: Expense };
export type AccountList = { [key: string]: Account };
export type PeriodList = { [key: string]: Period };
