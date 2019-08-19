import { ExpenseList, CategoryList, TagList } from '../../../types/model';

export const createExpenseDataSource = (
  expenses: ExpenseList,
  categories: CategoryList,
  tags: TagList,
) =>
  Object.values(expenses).map(({ id, amount, categoryId, tagIds }) => {
    const category = categories[categoryId];
    const tagNames = tagIds.map((tagId) => {
      const tag = tags[tagId];
      return tag ? tag.name : '';
    });

    return {
      amount,
      key: id,
      category: category ? category.name : '',
      tags: tagNames,
    };
  });
