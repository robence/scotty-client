import React from 'react';
import styled from 'styled-components';
import ExpensePresenter from './expense/Container';
import CategoryPresenter from './category/Container';
import TagPresenter from './tag/Container';
import { DashboardType } from '../../types/model';

const Presenter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export default function PresenterComponent({
  tags,
  expenses,
  categories,
}: DashboardType) {
  return (
    <Presenter>
      <ExpensePresenter
        categories={categories}
        tags={tags}
        expenses={expenses}
      />
      <CategoryPresenter
        categories={categories}
        tags={tags}
        expenses={expenses}
      />
      <TagPresenter categories={categories} tags={tags} expenses={expenses} />
    </Presenter>
  );
}
