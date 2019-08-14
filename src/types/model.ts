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

export type DashboardType = {
  tags: Tag[];
  expenses: Expense[];
  categories: Category[];
};
