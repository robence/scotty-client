import { Category, User, Expense, Tag } from './model';

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
