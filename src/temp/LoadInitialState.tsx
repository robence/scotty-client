import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store/initialState';
import { categoryStart } from '../store/category/actions';
import getCategories from '../api';

export default function LoadInitialState({
  children,
}: {
  children: JSX.Element[];
}) {
  const { categories } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const fetchCategories = bindActionCreators(categoryStart, dispatch);

  console.log('Hello');
  console.log(categories);

  useEffect(() => {
    console.log('There');
    if (Object.values(categories).length === 0) {
      console.log('General Kenobi');
      // fetchCategories();
      getCategories().then((resp) => {
        console.log('resp');
        console.log(resp);
      });
    }
    // categories = { key: { _id: 'key', name: 'value' } };
    return () => {
      console.log('Udv');
    };
  }, [categories]);

  return <>{children}</>;
}
