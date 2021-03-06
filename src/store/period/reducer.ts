import SELECT_PERIOD, { PeriodActionTypes } from './types';
import { State } from '../initialState';

export default function periodReducer(
  state: State,
  { type, periodId }: PeriodActionTypes,
): State {
  switch (type) {
    case SELECT_PERIOD:
      return {
        ...state,
        selectedPeriodId: Number(periodId),
      };

    default:
      return state;
  }
}
