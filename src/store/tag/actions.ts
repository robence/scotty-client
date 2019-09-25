import {
  TagCreateRequestAction,
  TagCreateSuccessAction,
  TAG_CREATE_REQUESTED,
  TAG_CREATE_SUCCESS,
} from './types';
import { TagCreateResponseDTO } from '../../api/dto';

export function createTagStart(payload: {
  name: string;
}): TagCreateRequestAction {
  return { type: TAG_CREATE_REQUESTED, payload };
}

export function createTagSuccess(
  payload: TagCreateResponseDTO,
): TagCreateSuccessAction {
  return {
    type: TAG_CREATE_SUCCESS,
    payload,
  };
}
