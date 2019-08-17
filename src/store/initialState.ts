import {
  categories,
  tags,
  expenses,
  selectedAccount,
  accountList,
} from '../assets';
import { CategoryList, TagList, ExpenseList, Account, AccountList } from '../types/model';

export type State = {
  selectedAccount: Account;
  accountList: AccountList;
  categories: CategoryList;
  tags: TagList;
  expenses: ExpenseList;
};

const initialState: State = {
  selectedAccount,
  accountList,
  categories,
  tags,
  expenses,
};

export default initialState;
