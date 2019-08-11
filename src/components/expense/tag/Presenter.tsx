import React from 'react'
import { Select } from 'antd';

type PresenterType = {
  selectedTags: string[];
  filteredOptions: string[];
  handleChange: (e: any) => void;
}

export default function Presenter({
  selectedTags, 
  filteredOptions, 
  handleChange, 
}: PresenterType) {
  return (
    
      <Select
        mode="multiple"
        placeholder="Select tags"
        value={selectedTags}
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        {filteredOptions.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
  );
}
