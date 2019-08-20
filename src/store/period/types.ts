import { Period } from '../../types/model';

export const SELECT_PERIOD = 'SELECT_PERIOD';

interface SelectPeriodAction {
  type: typeof SELECT_PERIOD;
  period: Period;
}

export type PeriodActionTypes = SelectPeriodAction;
