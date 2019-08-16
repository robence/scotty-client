import React from 'react';
import styled from 'styled-components';
import AllExpenses from '../../components/dashboard/ExpenseTableContainer';
import ExpensesByCategory from '../../components/dashboard/CategoryTableContainer';
import ExpensesByTags from '../../components/dashboard/TagTableContainer';
import { DashboardType } from '../../types/model';

import Card from '../../components/ui/Card';
import WithHeading from '../../components/enhancer/WithHeading';

import { Carousel } from 'antd';

const MyCarousel = styled(Carousel)`
height: 90vh;

  & .ant-carousel {
    height: 100%;
  }

  & div.slick-list div.slick-active.slick-current {
    height: 100%;
    display: flex;
    justify-content: center;
  }

  & ul.slick-dots {
    margin-top: 100px;
    height: 30px;

    & li {
      height: inherit;

      & button {
        height: 100%;
        min-width: 50px; 
      }
    }
  }
`;
export default function PresenterComponent({
  tags,
  expenses,
  categories,
}: DashboardType) {
  return (
    <div>
      <MyCarousel>
        <Card>
          <WithHeading title={'All Expenses'}>
            <AllExpenses
              categories={categories}
              tags={tags}
              expenses={expenses}
            />
          </WithHeading>
        </Card>

        <Card>
          <WithHeading title={'Expenses by category'}>
            <ExpensesByCategory
              categories={categories}
              tags={tags}
              expenses={expenses}
            />
          </WithHeading>
        </Card>

        <Card>
          <WithHeading title={'Expenses by tags'}>
            <ExpensesByTags
              categories={categories}
              tags={tags}
              expenses={expenses}
            />
          </WithHeading>
        </Card>
      </MyCarousel>
    </div>
  );
}
