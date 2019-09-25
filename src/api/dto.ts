import { Category, User, Expense, Tag, Account } from '../types/model';
import { UserBase, ExpenseBase, Token } from '../types/base';

export type CategoryFetchResponseDTO = { categories: Category[] };
export type ExpenseFetchResponseDTO = { expenses: Expense[] };

export type ExpenseCreateRequestDTO = ExpenseBase;
export type ExpenseCreateResponseDTO = { expense: Expense };

export type UserCreateRequestDTO = UserBase & { password: string };

export type UserLoginRequestDTO = { username: string; password: string };
export type UserLoginResponseDTO = UserFetchResponseDTO & Token;

export type UserFetchRequestDTO = Token;
export type UserFetchResponseDTO = { user: User };

export type TagCreateRequestDTO = { name: string };
export type TagCreateResponseDTO = { tag: Tag };

export type AccountCreateRequestDTO = { name: string };
export type AccountCreateResponseDTO = { account: Account };
