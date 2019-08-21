import {
  categories,
  tags,
  expenses,
  accountList,
  periodList,
  MONTH_IN_MINUTES,
} from '../assets';
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
const selectedPeriod = periodList[MONTH_IN_MINUTES];

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
