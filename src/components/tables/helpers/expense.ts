import { Expense, CategoryList, TagList } from '../../../types/model';

type ExpenseDataItem = { key: number } & {
  amount: number;
  category: string;
  tags: string[];
  created: string;
};

export const createExpenseDataSource = (
  expenses: Expense[],
  categories: CategoryList,
  tags: TagList,
): ExpenseDataItem[] => {
  return expenses.map(({ id, amount, categoryId, tagIds, createdTs }) => {
    const category = categories[categoryId];
    const tagNames = tagIds.map((tagId) => tags.byIds[tagId].name);

    return {
      amount,
      key: id,
      category: category ? category.name : '',
      tags: tagNames,
      created: createdTs.toDateString(),
    };
  });
};
