import SELECT_PERIOD, { SelectPeriodAction } from './types';
import { Period } from '../../types/model';

export default function selectPeriod(period: Period): SelectPeriodAction {
  return {
    type: SELECT_PERIOD,
    period,
  };
}
