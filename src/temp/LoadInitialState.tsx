import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store/initialState';
import { categoryStart } from '../store/category/actions';

export default function LoadInitialState(): JSX.Element {
  const { categories } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const fetchCategories = bindActionCreators(categoryStart, dispatch);

  useEffect(() => {
    if (Object.values(categories).length === 0) {
      fetchCategories();
    }
  }, [categories, fetchCategories]);

  return <></>;
}
