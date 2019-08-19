import React from 'react';
import styled from 'styled-components';
import AllExpenses from '../components/tables/ExpenseTableContainer';
import ExpensesByCategory from '../components/tables/CategoryTableContainer';
import ExpensesByTags from '../components/tables/TagTableContainer';

import Card from '../components/ui/Card';
import WithHeading from '../components/enhancer/WithHeading';

import { Carousel } from 'antd';

export default function PresenterComponent() {
  return (
    <MyCarousel>
      <Card>
        <WithHeading title={'All Expenses'}>
          <AllExpenses />
        </WithHeading>
      </Card>

      <Card>
        <WithHeading title={'Expenses by category'}>
          <ExpensesByCategory />
        </WithHeading>
      </Card>

      <Card>
        <WithHeading title={'Expenses by tags'}>
          <ExpensesByTags />
        </WithHeading>
      </Card>
    </MyCarousel>
  );
}

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
