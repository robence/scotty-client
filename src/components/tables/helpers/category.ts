import { Expense, CategoryList } from '../../../types/model';

export const groupExpensesByCategory = (
  expenses: Expense[],
): { [key: string]: number } =>
  expenses.reduce(
    (
      memo: { [categoryId: string]: number },
      { amount, categoryId }: { amount: number; categoryId: string },
    ) => ({
      ...memo,
      [categoryId]: memo[categoryId] ? memo[categoryId] + amount : amount,
    }),
    {},
  );

type CategoryDataItem = { key: string } & {
  amount: number;
  category: string;
};

export const createCategoryDataSource = (
  categorizedExpenses: {
    [key: string]: number;
  },
  categories: CategoryList,
): CategoryDataItem[] =>
  Object.entries(categorizedExpenses).map(([categoryId, amount]) => {
    const category = categories[Number(categoryId)];
    return {
      amount,
      key: categoryId,
      category: category ? category.name : '',
    };
  });
