import { Tag } from '../../types/model';

const CREATE_TAG = 'CREATE_TAG';
export default CREATE_TAG;
export interface CreateTagAction {
  type: typeof CREATE_TAG;
  tag: Tag;
}

export type TagActionTypes = CreateTagAction;
