import React from 'react';
import { AutoComplete, Select } from 'antd';

type PresenterProps = {
  tag: string;
  dataSource: string[];
  handleChange: (e: any) => void;
  selectedCategory: string;
  categoryList: string[];
  handleCategory: (e: any) => void;
};
export default function Presenter({
  tag,
  dataSource,
  handleChange,
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
        {categoryList.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
  );
}
