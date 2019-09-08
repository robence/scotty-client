import React from 'react';
import LoadCategories from './LoadCategories';
import LoadUser from './LoadUser';

export default function LoadData(): JSX.Element {
  return (
    <>
      <LoadCategories />
      <LoadUser />
    </>
  );
}
