import { useState } from 'react';
import { FormElementProps } from '../../../types/form';
import { TagList } from '../../../types/model';

export default function useTags(tags: TagList): FormElementProps {
  const [tagNames, setTagNames] = useState([] as string[]);

  const tagOptions = Object.values(tags.byIds);
  const filteredTagOptions = tagOptions.filter(
    ({ name }) => !tagNames.includes(name),
  );

  const handleTagSelect = (newSelection: string[]) => setTagNames(newSelection);

  return {
    selected: tagNames,
    options: filteredTagOptions,
    onChange: handleTagSelect,
  };
}
