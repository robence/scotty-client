import { CategoryFetchResponseDTO } from '../../api/dto';

export const CATEGORY_FETCH_REQUESTED = 'CATEGORY_FETCH_REQUESTED';
export const CATEGORY_FETCH_SUCCESS = 'CATEGORY_FETCH_SUCCESS';

export interface CategoryFetchRequestAction {
  type: typeof CATEGORY_FETCH_REQUESTED;
}

export interface CategoryFetchSuccessAction {
  type: typeof CATEGORY_FETCH_SUCCESS;
  payload: CategoryFetchResponseDTO;
}

export type CategoryActionTypes =
  | CategoryFetchRequestAction
  | CategoryFetchSuccessAction;
