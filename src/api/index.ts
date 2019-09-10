import HttpService from '../services/HttpService';
import {
  GetCategoriesType,
  GetUserType,
  GetExpensesType,
  TagCreateResponseDTO,
  AccountCreateResponseDTO,
} from '../types/dto';

export function getCategories(): Promise<GetCategoriesType> {
  return HttpService.get('/api/categories/');
}

export function getUser(): Promise<GetUserType> {
  return HttpService.get('/api/users/5d2cad1aac3af3d397f8659e');
}

export function getExpenses(userId: string): Promise<GetExpensesType> {
  return HttpService.get(`/api/expenses/user/${userId}`);
}

export function createTag(body: {
  userId: string;
  name: string;
}): Promise<TagCreateResponseDTO> {
  return HttpService.post(`/api/users/tag`, body);
}

export function createAccount(body: {
  userId: string;
  name: string;
}): Promise<AccountCreateResponseDTO> {
  return HttpService.post(`/api/users/account`, body);
}
