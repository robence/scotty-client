import React, { SetStateAction } from 'react';
import { Select } from 'antd';

type PresenterProps = {
  selectedCategory: string;
  categoryList: string[];
  handleCategory: (e: SetStateAction<string>) => void;
};
export default function Presenter({
  selectedCategory,
  categoryList,
  handleCategory,
}: PresenterProps) {
  return (
    <Select
      value={selectedCategory}
      onChange={handleCategory}
      style={{ width: '100%' }}
    >
      {categoryList.map((item) => (
        <Select.Option key={item} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  );
}
