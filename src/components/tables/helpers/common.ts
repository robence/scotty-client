import { Expense } from '../../../types/model';

export const filterExpensesByAccount = (
  expenses: Expense[],
  id: number,
): any[] => expenses.filter(({ accountId }) => accountId === id);

export const filterExpensesByPeriod = (
  expenses: Expense[],
  startPeriod: Date,
): any[] => {
  return expenses.filter(
    ({ createdTs }) => createdTs > startPeriod
    );
};
