import { Expense } from '../../../types/model';

export const filterExpensesByAccount = (
  expenses: Expense[],
  id: string,
): Expense[] => expenses.filter(({ accountId }) => accountId === id);

const filterExpensesByPeriod = (
  expenses: Expense[],
  startPeriod: Date,
  isEndPeriod = false,
): Expense[] =>
  isEndPeriod
    ? expenses.filter(({ createdAt }) => createdAt < startPeriod)
    : expenses.filter(({ createdAt }) => createdAt > startPeriod);

export const filterExpenses = (
  expenses: Expense[],
  accountId: string,
  periodId: number,
  isEndPeriod = false,
): Expense[] => {
  const x = filterExpensesByAccount(expenses, accountId);
  if (periodId === -1) {
    return x;
  }

  const startPeriod = new Date();
  startPeriod.setMinutes(startPeriod.getMinutes() - periodId);

  const y = filterExpensesByPeriod(x, startPeriod, isEndPeriod);
  return y;
};
