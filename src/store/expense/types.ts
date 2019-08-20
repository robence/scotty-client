import { Expense } from '../../types/model';

export const CREATE_EXPENSE = 'CREATE_EXPENSE';

interface CreateExpenseAction {
  type: typeof CREATE_EXPENSE;
  expense: Expense;
}

export type ExpenseActionTypes = CreateExpenseAction;
