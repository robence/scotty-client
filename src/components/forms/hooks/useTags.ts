import { useState } from 'react';
import { FormElementProps } from '../../../types/form';
import { TagList } from '../../../types/model';

export default function useTags(tags: TagList): FormElementProps {
  const [tagNames, setTagNames]: [
    string[],
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    (newSelection: any) => void,
  ] = useState([]);

  const tagOptions = Object.values(tags.byIds);
  const filteredTagOptions = tagOptions.filter(
    ({ name }) => !tagNames.includes(name),
  );

  const handleTagSelect = (newSelection: string[]): void =>
    setTagNames(newSelection);

  return {
    selected: tagNames,
    options: filteredTagOptions,
    onChange: handleTagSelect,
  };
}
