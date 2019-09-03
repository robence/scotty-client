import { TagList, Expense } from '../../../types/model';

export const groupExpensesByTag = (
  expenses: Expense[],
): { [key: number]: number } =>
  expenses.reduce(
    (memo: { [tagId: number]: number }, { tagIds, amount }: Expense) =>
      tagIds.reduce(
        (groupedExpenses: { [tagId: number]: number }, tagId: number) => ({
          ...groupedExpenses,
          [tagId]: groupedExpenses[tagId]
            ? groupedExpenses[tagId] + amount
            : amount,
        }),
        memo,
      ),
    {},
  );

type TagDataItem = { key: number } & {
  amount: number;
  tag: string;
};

export const createTagDataSource = (
  categorizedExpenses: {
    [key: number]: number;
  },
  tags: TagList,
): TagDataItem[] =>
  Object.entries(categorizedExpenses).map(([tagId, amount]) => {
    const tag = tags.byIds[Number(tagId)];
    return {
      amount,
      key: Number(tagId),
      tag: tag ? tag.name : '',
    };
  });
