import { CREATE_EXPENSE } from './types';
import { Expense } from '../../types/model';

export const createExpense = (expense: Expense) => ({
  type: CREATE_EXPENSE,
  expense,
});
