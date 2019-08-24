import { useState } from 'react';
import { CategoryList } from '../../../types/model';
import { FormElementProps } from '../../../types/form';

export default function useCategory(
  categories: CategoryList,
): FormElementProps {
  const [categoryId, setCategory] = useState(categories[0].id);
  const categoryOptions = Object.values(categories);
  const handleCategorySelect = (id: number) => setCategory(id);

  return {
    selected: categoryId,
    options: categoryOptions,
    onChange: handleCategorySelect,
  };
}
