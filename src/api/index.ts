import HttpService from '../services/HttpService';
import { Category, User, Expense } from '../types/model';

export type GetCategoriesType = {
  categories: Category[];
};

export type GetUserType = {
  user: User;
};

export type GetExpensesType = {
  expenses: Expense[];
};

export function getCategories(): Promise<GetCategoriesType> {
  return HttpService.get('/api/categories/');
}

export function getUser(): Promise<GetCategoriesType> {
  return HttpService.get('/api/users/5d2cad1aac3af3d397f8659e');
}

export function getExpenses(userId: string): Promise<GetExpensesType> {
  return HttpService.get(`/api/expenses/user/${userId}`);
}
