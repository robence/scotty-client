import objectify from '../utils';
import { PeriodList } from '../types/model';

const DAY_IN_MINUTES = 24 * 60;
const WEEK_IN_MINUTES = 7 * DAY_IN_MINUTES;
export const MONTH_IN_MINUTES = 30 * DAY_IN_MINUTES;
const YEAR_IN_MINUTES = 365 * DAY_IN_MINUTES;

export const periodList: PeriodList = objectify([
  { _id: DAY_IN_MINUTES.toString(), name: 'Last day' },
  { _id: WEEK_IN_MINUTES.toString(), name: 'Last 7 days' },
  { _id: MONTH_IN_MINUTES.toString(), name: 'Last 30 days' },
  { _id: YEAR_IN_MINUTES.toString(), name: 'Last 365 days' },
  { _id: '-1', name: 'Full history' },
]);
