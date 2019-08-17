import { Tag } from '../../types/model';

export const CREATE_TAG = 'CREATE_TAG';

interface CreateTagAction {
  type: typeof CREATE_TAG;
  tag: Tag;
}

export type TagActionTypes = CreateTagAction;
