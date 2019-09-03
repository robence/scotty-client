import CREATE_EXPENSE, { CreateExpenseAction } from './types';
import { Expense } from '../../types/model';

export default function createExpense(expense: Expense): CreateExpenseAction {
  return {
    type: CREATE_EXPENSE,
    expense,
  };
}
