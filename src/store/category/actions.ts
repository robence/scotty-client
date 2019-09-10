import {
  CATEGORY_FETCH_REQUESTED,
  CATEGORY_FETCH_SUCCESS,
  CategoryFetchRequestAction,
  CategoryFetchSuccessAction,
} from './types';
import { GetCategoriesType } from '../../types/dto';

export function categoryStart(): CategoryFetchRequestAction {
  return { type: CATEGORY_FETCH_REQUESTED };
}

export function categorySuccess(
  payload: GetCategoriesType,
): CategoryFetchSuccessAction {
  return {
    type: CATEGORY_FETCH_SUCCESS,
    payload,
  };
}
