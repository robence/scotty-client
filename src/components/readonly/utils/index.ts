import { Expense } from '../../../types/model';

export default function sumExpenses(expenseArray: Expense[]): number {
  return expenseArray.reduce((sum, { amount }) => sum + amount, 0);
}
