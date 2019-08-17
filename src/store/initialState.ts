import {
  categories,
  tags,
  expenses,
  selectedAccount,
  accountList,
} from '../assets';
import { Category, TagList, ExpenseList, Account, AccountList } from '../types/model';

export type State = {
  // TODO: fix this
  selectedAccount: any;
  accountList: AccountList;
  categories: Category[];
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
