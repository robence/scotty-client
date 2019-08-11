import React, { useState } from 'react';
import Presenter from './Presenter';

const defaultDataSource = ['Account1', 'Account2', 'Account3'];

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
