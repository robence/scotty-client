import React, { useState } from 'react';
import Presenter from './SelectCategoryComponent';

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
// TODO: ref same as ../account