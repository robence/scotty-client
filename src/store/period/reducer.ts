import SELECT_PERIOD, { PeriodActionTypes } from './types';
import { State } from '../initialState';

export default function periodReducer(
  state: State,
  { type, period }: PeriodActionTypes,
): State {
  switch (type) {
    case SELECT_PERIOD:
      return {
        ...state,
        selectedPeriod: period,
      };

    default:
      return state;
  }
}
