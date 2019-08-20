import { Expense } from '../../../types/model';

export const filterExpensesByAccount = (
  expenses: Expense[],
  id: number,
): any[] => expenses.filter(({ accountId }) => accountId === id);
