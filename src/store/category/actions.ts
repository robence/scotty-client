import {
  CATEGORY_FETCH_REQUESTED,
  CATEGORY_FETCH_SUCCESS,
  CategoryFetchRequestAction,
  CategoryFetchSuccessAction,
} from './types';
import { Category } from '../../types/model';

export function categoryStart(): CategoryFetchRequestAction {
  return { type: CATEGORY_FETCH_REQUESTED };
}

export function categorySuccess(
  categories: Category[],
): CategoryFetchSuccessAction {
  return {
    type: CATEGORY_FETCH_SUCCESS,
    categories,
  };
}
