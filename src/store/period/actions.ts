import { SELECT_PERIOD } from './types';
import { Period } from '../../types/model';

export const selectPeriod = (account: Period) => ({
  type: SELECT_PERIOD,
  account,
});
