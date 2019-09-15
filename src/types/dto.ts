import { Category, User, Expense, Tag, Account } from './model';

export type GetCategoriesType = {
  categories: Category[];
};

export type GetUserType = {
  user: User;
};

export type GetExpensesType = {
  expenses: Expense[];
};

export type TagCreateResponseDTO = {
  tag: Tag;
};

export type AccountCreateResponseDTO = {
  account: Account;
};

export type ExpenseCreateResponseDTO = {
  expense: Expense;
};

export type UserCreateResponseDTO = {
  user: User;
};
