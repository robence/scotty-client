import {
  TagActionTypes,
  TAG_CREATE_REQUESTED,
  TAG_CREATE_SUCCESS,
} from './types';
import { State } from '../initialState';

export default function tagReducer(
  state: State,
  action: TagActionTypes,
): State {
  switch (action.type) {
    case TAG_CREATE_REQUESTED:
      return { ...state, loading: true };
    case TAG_CREATE_SUCCESS:
      return {
        ...state,
        tags: {
          byIds: {
            ...state.tags.byIds,
            [action.payload.tag._id]: action.payload.tag,
          },
          byNames: {
            ...state.tags.byNames,
            [action.payload.tag.name]: action.payload.tag,
          },
        },
      };
    default:
      return state;
  }
}
