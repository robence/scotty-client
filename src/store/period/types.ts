const SELECT_PERIOD = 'SELECT_PERIOD';
export default SELECT_PERIOD;

export interface SelectPeriodAction {
  type: typeof SELECT_PERIOD;
  periodId: string;
}

export type PeriodActionTypes = SelectPeriodAction;
