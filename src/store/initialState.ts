import { periods } from '../consts';
import {
  CategoryList,
  TagList,
  ExpenseList,
  Account,
  AccountList,
} from '../types/model';

export type State = {
  userId: string;
  selectedAccount: Account;
  selectedPeriodId: number;
  accountList: AccountList;
  categories: CategoryList;
  tags: TagList;
  expenses: ExpenseList;
  loading: boolean;
  token?: string;
  lang: string;
};

const selectedAccount = { _id: '-1', name: '' };
const selectedPeriodId = periods.MONTH_IN_MINUTES;

const initialState: State = {
  userId: '',
  selectedPeriodId,
  selectedAccount,
  accountList: {},
  categories: {},
  tags: { byIds: {}, byNames: {} },
  expenses: {},
  loading: false,
  lang: 'hu',
};

export default initialState;
