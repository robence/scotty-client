import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store/initialState';
import { categoryStart } from '../store/category/actions';

export default function LoadCategories(): JSX.Element {
  const { categories } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const boundCategoryStart = bindActionCreators(categoryStart, dispatch);

  useEffect(() => {
    if (!Object.entries(categories).length) {
      boundCategoryStart();
    }
  }, [categories, boundCategoryStart]);

  return <></>;
}
