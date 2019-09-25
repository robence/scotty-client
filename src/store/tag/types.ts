import { TagCreateResponseDTO } from '../../api/dto';

export const TAG_CREATE_REQUESTED = 'TAG_CREATE_REQUESTED';
export const TAG_CREATE_SUCCESS = 'TAG_CREATE_SUCCESS';

export interface TagCreateRequestAction {
  type: typeof TAG_CREATE_REQUESTED;
  payload: { name: string };
}

export interface TagCreateSuccessAction {
  type: typeof TAG_CREATE_SUCCESS;
  payload: TagCreateResponseDTO;
}

export type TagActionTypes = TagCreateRequestAction | TagCreateSuccessAction;
