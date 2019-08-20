import { Expense } from '../../../types/model';

export const sumExpenses = (expenseArray: Expense[]): number =>
  expenseArray.reduce((sum, { amount }) => sum + amount, 0);
