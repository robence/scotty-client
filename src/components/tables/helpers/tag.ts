import { TagList, Expense } from '../../../types/model';

export const groupExpensesByTag = (
  expenses: Expense[],
): { [key: string]: number } =>
  expenses.reduce(
    (memo: { [tagId: number]: number }, { tagIds, amount }: Expense) =>
      tagIds.reduce(
        (groupedExpenses: { [tagId: string]: number }, tagId: string) => ({
          ...groupedExpenses,
          [tagId]: groupedExpenses[tagId]
            ? groupedExpenses[tagId] + amount
            : amount,
        }),
        memo,
      ),
    {},
  );

type TagDataItem = { key: string } & {
  amount: number;
  tag: string;
};

export const createTagDataSource = (
  categorizedExpenses: {
    [key: string]: number;
  },
  tags: TagList,
): TagDataItem[] =>
  Object.entries(categorizedExpenses).map(([tagId, amount]) => {
    const tag = tags.byIds[tagId];
    return {
      amount,
      key: tagId,
      tag: tag ? tag.name : '',
    };
  });
