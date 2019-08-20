import { ExpenseList, CategoryList, TagList } from '../../../types/model';

export const createExpenseDataSource = (
  expenses: ExpenseList,
  categories: CategoryList,
  tags: TagList,
) => {
  return Object.values(expenses).map(({ id, amount, categoryId, tagIds }) => {
    const category = categories[categoryId];
    const tagNames = tagIds.map((tagId) => tags.byIds[tagId].name);

    return {
      amount,
      key: id,
      category: category ? category.name : '',
      tags: tagNames,
    };
  });
};
