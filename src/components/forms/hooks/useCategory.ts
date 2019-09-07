import { useState } from 'react';
import { CategoryList, Category } from '../../../types/model';
import { FormElementProps } from '../../../types/form';

export default function useCategory(
  categories: CategoryList,
): FormElementProps {
  const categoryList: Category[] = Object.values(categories);

  const [categoryId, setCategory] = useState(
    // !categoryList ? '' : categoryList[0]._id,
    '',
  );
  const categoryOptions = categoryList;
  const handleCategorySelect = (id: string): void => setCategory(id);

  return {
    selected: categoryId,
    options: categoryOptions,
    onChange: handleCategorySelect,
  };
}
