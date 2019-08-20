import { categories, tags, expenses, accountList, periodList } from '../assets';
import {
  CategoryList,
  TagList,
  ExpenseList,
  Account,
  AccountList,
  Period,
  PeriodList,
} from '../types/model';

// TODO: move effects to somewhere else

export type State = {
  selectedAccount: Account;
  selectedPeriod: Period;
  periodList: PeriodList;
  accountList: AccountList;
  categories: CategoryList;
  tags: TagList;
  expenses: ExpenseList;
};

const selectedAccount = Object.values(accountList)[0];
const selectedPeriod = Object.values(periodList)[0];

const initialState: State = {
  selectedPeriod,
  selectedAccount,
  periodList,
  accountList,
  categories,
  tags,
  expenses,
};

export default initialState;
