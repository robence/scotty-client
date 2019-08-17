import React, { useState } from 'react';
import Presenter from './SelectTagsComponent';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters', 'Gadgets', 'Cleaning'];

export default function TagContainer() {
  const [selectedTags, setTags] = useState([] as string[]);

  const handleChange = (newSelection: string[]) => {
    setTags(newSelection);
  };

  const filteredOptions = OPTIONS.filter(o => !selectedTags.includes(o));
  return (
    <Presenter
      filteredOptions={filteredOptions}
      selectedTags={selectedTags}
      handleChange={handleChange}
    />
  );
}
