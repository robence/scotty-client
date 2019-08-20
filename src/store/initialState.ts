import { categories, tags, expenses, accountList } from '../assets';
import {
  CategoryList,
  TagList,
  ExpenseList,
  Account,
  AccountList,
} from '../types/model';

// TODO: move effects to somewhere else

export type State = {
  selectedAccount: Account;
  accountList: AccountList;
  categories: CategoryList;
  tags: TagList;
  expenses: ExpenseList;
};

const selectedAccount = Object.values(accountList)[0];

const initialState: State = {
  selectedAccount,
  accountList,
  categories,
  tags,
  expenses,
};

export default initialState;
