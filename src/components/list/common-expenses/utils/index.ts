import { Expense } from '../../../../types/model';

export type ExpensesByCount = { [count: number]: string[] };
export type GroupedCommonExpenses = {
  [id: string]: {
    count: number;
    expense: { amount: number; categoryId: number; tagIds: number[] };
  };
};

export const groupCommonExpenses = (
  expenses: Expense[],
): GroupedCommonExpenses =>
  expenses.reduce(
    (
      groupedExpenses: GroupedCommonExpenses,
      { amount, categoryId, tagIds }: Expense,
    ) => {
      const id = `${categoryId}-${amount}-${tagIds.join(',')}`;

      return {
        ...groupedExpenses,
        [id]: {
          count:
            groupedExpenses[id] && groupedExpenses[id].count
              ? groupedExpenses[id].count + 1
              : 1,
          expense: {
            amount,
            categoryId,
            tagIds,
          },
        },
      };
    },
    {},
  );

export const groupCommonExpenseIdsByCount = (
  expenses: GroupedCommonExpenses,
): ExpensesByCount =>
  Object.entries(expenses).reduce(
    (countReferences: ExpensesByCount, [key, { count, expense }]) => {
      return {
        ...countReferences,
        [count]: !countReferences[count]
          ? [key]
          : [...countReferences[count], key],
      };
    },
    {},
  );

export const sortExpenseIdsByCount = (expenses: ExpensesByCount): string[] => {
  const comparator = (a: number, b: number) => (a > b ? a : b);
  const sortedIds: number[] = Object.keys(expenses)
    .map((num) => Number(num))
    .sort(comparator)
    .reverse();

  return sortedIds.reduce(
    (memo: string[], id: number) => {
      return !memo ? expenses[id] : [...memo, ...expenses[id]];
    },
    [] as string[],
  );
};
