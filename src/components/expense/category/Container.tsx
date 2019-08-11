import React, { useState } from 'react';
import Presenter from './Presenter';

const defaultDataSource = ['Health', 'Entertainment', 'Consumables'];

export default function TagComponent() {
  const [tag, setTag] = useState('');
  const [selectedCategory, setCategory] = useState(defaultDataSource[0]);

  const [dataSource] = useState(defaultDataSource);

  const handleChange = (e: any) => setTag(e ? e.toString() : '');
  const handleCategory = (e: any) => setCategory(e);

  return (
    <Presenter
      tag={tag}
      dataSource={dataSource}
      handleChange={handleChange}
      categoryList={defaultDataSource}
      selectedCategory={selectedCategory}
      handleCategory={handleCategory}
    />
  );
}
