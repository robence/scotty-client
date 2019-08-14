import React, { useState } from 'react';
import Presenter from './Presenter';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

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
