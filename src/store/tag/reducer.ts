import { CREATE_TAG, TagActionTypes } from './types';
import { State } from '../initialState';

export function tagReducer(state: State, { type, tag }: TagActionTypes) {
  switch (type) {
    case CREATE_TAG:
      return {
        ...state,
        tags: { ...state.tags, [tag.id]: tag },
      };
    default:
      return state;
  }
}
