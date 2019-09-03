import CREATE_TAG, { CreateTagAction } from './types';
import { Tag } from '../../types/model';

export default function createTag(tag: Tag): CreateTagAction {
  return {
    type: CREATE_TAG,
    tag,
  };
}
