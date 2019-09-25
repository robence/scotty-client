import objectify from '../utils';
import { PeriodList } from '../types/model';
import text from '../i18n';

export const DAY_IN_MINUTES = 24 * 60;
export const WEEK_IN_MINUTES = 7 * DAY_IN_MINUTES;
export const MONTH_IN_MINUTES = 30 * DAY_IN_MINUTES;
const YEAR_IN_MINUTES = 365 * DAY_IN_MINUTES;

export const periodList: PeriodList = objectify([
  { _id: DAY_IN_MINUTES.toString(), name: text.assets.period.day },
  { _id: WEEK_IN_MINUTES.toString(), name: text.assets.period.week },
  { _id: MONTH_IN_MINUTES.toString(), name: text.assets.period.month },
  { _id: YEAR_IN_MINUTES.toString(), name: text.assets.period.year },
  { _id: '-1', name: text.assets.period.full },
]);
