import { Period } from '../../types/model';

const SELECT_PERIOD = 'SELECT_PERIOD';
export default SELECT_PERIOD;

export interface SelectPeriodAction {
  type: typeof SELECT_PERIOD;
  period: Period;
}

export type PeriodActionTypes = SelectPeriodAction;
