export type Base = {
  _id: string;
  name: string;
};

export type ExpenseBase = {
  userId: string;
  amount: number;
  categoryId: string;
  tagIds: string[];
  accountId: string;
  createdAt: Date;
};

export type UserBase = {
  username: string;
  email: string;
};
