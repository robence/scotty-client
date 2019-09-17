import { periodList, MONTH_IN_MINUTES } from '../assets';
import {
  CategoryList,
  TagList,
  ExpenseList,
  Account,
  AccountList,
  Period,
  PeriodList,
} from '../types/model';

export type State = {
  userId: string;
  selectedAccount: Account;
  selectedPeriod: Period;
  periodList: PeriodList;
  accountList: AccountList;
  categories: CategoryList;
  tags: TagList;
  expenses: ExpenseList;
  loading: boolean;
};

const selectedAccount = { _id: '-1', name: '' };
const selectedPeriod = periodList[MONTH_IN_MINUTES];

const initialState: State = {
  userId: '',
  selectedPeriod,
  selectedAccount,
  periodList,
  accountList: {},
  categories: {},
  tags: { byIds: {}, byNames: {} },
  expenses: {},
  loading: false,
};

export default initialState;
