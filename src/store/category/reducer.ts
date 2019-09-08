import {
  CategoryActionTypes,
  CATEGORY_FETCH_REQUESTED,
  CATEGORY_FETCH_SUCCESS,
} from './types';
import { State } from '../initialState';
import { objectify } from '../../utils';

export default function categoryReducer(
  state: State,
  action: CategoryActionTypes,
): State {
  switch (action.type) {
    case CATEGORY_FETCH_REQUESTED:
      return { ...state, loading: true };
    case CATEGORY_FETCH_SUCCESS:
      return {
        ...state,
        categories: objectify(action.payload.categories),
        loading: false,
      };
    default:
      return state;
  }
}
