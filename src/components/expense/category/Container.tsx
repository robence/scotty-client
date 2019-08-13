import React, { useState } from 'react';
import Presenter from './Presenter';

const defaultDataSource = ['Health', 'Entertainment', 'Consumables'];

export default function TagComponent() {
  const [selectedCategory, setCategory] = useState(defaultDataSource[0]);

  const handleCategory = (e: any) => setCategory(e);

  return (
    <Presenter
      categoryList={defaultDataSource}
      selectedCategory={selectedCategory}
      handleCategory={handleCategory}
    />
  );
}
