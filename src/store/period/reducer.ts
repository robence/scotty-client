import { SELECT_PERIOD, PeriodActionTypes } from './types';
import { State } from '../initialState';

export function periodReducer(
  state: State,
  { type, period }: PeriodActionTypes,
) {
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
