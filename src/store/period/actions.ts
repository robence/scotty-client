import { SELECT_PERIOD } from './types';
import { Period } from '../../types/model';

export const selectPeriod = (period: Period) => ({
  type: SELECT_PERIOD,
  period,
});
