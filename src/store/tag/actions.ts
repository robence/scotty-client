import { CREATE_TAG } from './types';
import { Tag } from '../../types/model';

export const createTag = (tag: Tag) => ({
  type: CREATE_TAG,
  tag,
});