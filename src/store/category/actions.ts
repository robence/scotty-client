import {
  CATEGORY_FETCH_REQUESTED,
  CATEGORY_FETCH_SUCCESS,
  CategoryFetchRequestAction,
  CategoryFetchSuccessAction,
} from './types';
import { CategoryFetchResponseDTO } from '../../api/dto';

export function categoryStart(): CategoryFetchRequestAction {
  return { type: CATEGORY_FETCH_REQUESTED };
}

export function categorySuccess(
  payload: CategoryFetchResponseDTO,
): CategoryFetchSuccessAction {
  return {
    type: CATEGORY_FETCH_SUCCESS,
    payload,
  };
}
