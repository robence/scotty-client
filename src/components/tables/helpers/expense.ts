import { Expense, CategoryList, TagList } from '../../../types/model';

export type ExpenseDataItem = { key: string } & {
  amount: number;
  category: string;
  tags: string[];
  created: string;
};

export default function createExpenseDataSource(
  expenses: Expense[],
  categories: CategoryList,
  tags: TagList,
): ExpenseDataItem[] {
  return expenses.map(({ _id, amount, categoryId, tagIds, createdAt }) => {
    const category = categories[categoryId];
    const tagNames = tagIds.map((tagId) => tags.byIds[tagId].name);
    return {
      amount,
      key: _id,
      category: category ? category.name : '',
      tags: tagNames,
      created: createdAt.toLocaleString('hu-hu'),
    };
  });
}
