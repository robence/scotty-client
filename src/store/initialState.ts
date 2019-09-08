import {
  // tags,
  expenses,
  // accountList,
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
  loading: boolean;
};

// const selectedAccount = Object.values(accountList)[0];
const selectedAccount = { _id: '-1', name: 'Not Selected' };
const selectedPeriod = periodList[MONTH_IN_MINUTES];

const initialState: State = {
  selectedPeriod,
  selectedAccount,
  periodList,
  accountList: {},
  categories: {},
  tags: { byIds: {}, byNames: {} },
  expenses,
  loading: false,
};

export default initialState;
