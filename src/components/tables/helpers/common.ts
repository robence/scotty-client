import { Expense } from '../../../types/model';

export const filterExpensesByAccount = (
  expenses: Expense[],
  id: number,
): Expense[] => expenses.filter(({ accountId }) => accountId === id);

const filterExpensesByPeriod = (
  expenses: Expense[],
  startPeriod: Date,
): Expense[] => {
  return expenses.filter(({ createdTs }) => createdTs > startPeriod);
};

export const filterExpenses = (
  expenses: Expense[],
  accountId: number,
  periodId: number,
): Expense[] => {
  const x = filterExpensesByAccount(expenses, accountId);

  if (periodId === -1) {
    return x;
  }

  const startPeriod = new Date();
  startPeriod.setMinutes(startPeriod.getMinutes() - periodId);

  const y = filterExpensesByPeriod(x, startPeriod);
  return y;
};
