import SELECT_LANG, { LangActionTypes } from './types';
import { State } from '../initialState';

export default function periodReducer(
  state: State,
  { type, lang }: LangActionTypes,
): State {
  switch (type) {
    case SELECT_LANG:
      return {
        ...state,
        lang,
      };

    default:
      return state;
  }
}
