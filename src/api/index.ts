import HttpService from '../services/HttpService';
import {
  CategoryFetchResponseDTO,
  ExpenseFetchResponseDTO,
  TagCreateResponseDTO,
  AccountCreateResponseDTO,
  ExpenseCreateResponseDTO,
  UserLoginResponseDTO,
  UserLoginRequestDTO,
  UserCreateRequestDTO,
  ExpenseCreateRequestDTO,
  TagCreateRequestDTO,
  AccountCreateRequestDTO,
  UserFetchResponseDTO,
} from './dto';

export default function addTokenToHttpService(token: string): void {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  HttpService.addConfiguration(config);
}

export function loginUser(
  request: UserLoginRequestDTO,
): Promise<UserLoginResponseDTO> {
  return HttpService.post('/api/auth/login', request);
}

export function createUser(user: UserCreateRequestDTO): Promise<{}> {
  const body = {
    ...user,
    accounts: [],
    tags: [],
  };
  return HttpService.post(`/api/users/`, body);
}

export function createTag(
  tag: TagCreateRequestDTO,
): Promise<TagCreateResponseDTO> {
  return HttpService.post(`/api/users/tag`, tag);
}

export function createAccount(
  account: AccountCreateRequestDTO,
): Promise<AccountCreateResponseDTO> {
  return HttpService.post(`/api/users/account`, account);
}

export function createExpense(
  expense: ExpenseCreateRequestDTO,
): Promise<ExpenseCreateResponseDTO> {
  return HttpService.post(`/api/expenses/`, expense);
}

export function getCategories(): Promise<CategoryFetchResponseDTO> {
  return HttpService.get('/api/categories/');
}

export function getUser(): Promise<UserFetchResponseDTO> {
  return HttpService.get('/api/users/token/');
}

export function getExpenses(): Promise<ExpenseFetchResponseDTO> {
  return HttpService.get(`/api/expenses/token/`);
}
