import CREATE_TAG, { TagActionTypes } from './types';
import { State } from '../initialState';

export default function tagReducer(
  state: State,
  { type, tag }: TagActionTypes,
): State {
  switch (type) {
    case CREATE_TAG:
      return {
        ...state,
        tags: { ...state.tags, [tag._id]: tag },
      };
    default:
      return state;
  }
}
