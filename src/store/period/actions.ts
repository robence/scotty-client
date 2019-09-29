import SELECT_PERIOD, { SelectPeriodAction } from './types';

export default function selectPeriod(periodId: string): SelectPeriodAction {
  return {
    type: SELECT_PERIOD,
    periodId,
  };
}
