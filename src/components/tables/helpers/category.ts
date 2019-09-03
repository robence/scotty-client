import { ExpenseList, CategoryList } from '../../../types/model';

export const groupExpensesByCategory = (
  expenses: ExpenseList,
): { [key: number]: number } =>
  Object.values(expenses).reduce(
    (
      memo: { [categoryId: number]: number },
      { amount, categoryId }: { amount: number; categoryId: number },
    ) => ({
      ...memo,
      [categoryId]: memo[categoryId] ? memo[categoryId] + amount : amount,
    }),
    {},
  );

type CategoryDataItem = { key: number } & {
  amount: number;
  category: string;
};

export const createCategoryDataSource = (
  categorizedExpenses: {
    [key: number]: number;
  },
  categories: CategoryList,
): CategoryDataItem[] =>
  Object.entries(categorizedExpenses).map(([categoryId, amount]) => {
    const category = categories[Number(categoryId)];
    return {
      amount,
      key: Number(categoryId),
      category: category ? category.name : '',
    };
  });
