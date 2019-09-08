import HttpService from '../services/HttpService';
import { Category, User } from '../types/model';

export type GetCategoriesType = {
  categories: Category[];
};

export type GetUserType = {
  user: User;
};

export function getCategories(): Promise<GetCategoriesType> {
  return HttpService.get('/api/categories/');
}

export function getUser(): Promise<GetCategoriesType> {
  return HttpService.get('/api/users/5d2cad1aac3af3d397f8659e');
}
