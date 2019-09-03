import { Expense } from '../../types/model';

const CREATE_EXPENSE = 'CREATE_EXPENSE';
export default CREATE_EXPENSE;

export interface CreateExpenseAction {
  type: typeof CREATE_EXPENSE;
  expense: Expense;
}

export type ExpenseActionTypes = CreateExpenseAction;
