import { TagCreateResponseDTO } from '../../types/dto';

export const TAG_CREATE_REQUESTED = 'TAG_CREATE_REQUESTED';
export const TAG_CREATE_SUCCESS = 'TAG_CREATE_SUCCESS';

export interface TagCreateRequestAction {
  type: typeof TAG_CREATE_REQUESTED;
  payload: { userId: string; name: string };
}

export interface TagCreateSuccessAction {
  type: typeof TAG_CREATE_SUCCESS;
  payload: TagCreateResponseDTO;
}

export type TagActionTypes = TagCreateRequestAction | TagCreateSuccessAction;
