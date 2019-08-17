import { categories, tags, expenses, account, accountList } from '../assets';
import { Category, Tag, Expense, Account, AccountList } from '../types/model';

export type State = {
  account: any;
  accountList: AccountList;
  categories: Category[];
  tags: Tag[];
  expenses: Expense[];
};

const initialState: State = {
  account,
  accountList,
  categories,
  tags,
  expenses,
};

export default initialState;
