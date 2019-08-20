import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';

import AllExpenses from '../components/tables/ExpenseTableContainer';
import ExpensesByCategory from '../components/tables/CategoryTableContainer';
import ExpensesByTags from '../components/tables/TagTableContainer';
import SelectAccountContainer from '../components/dropdowns/account/SelectAccountContainer';
import SelectPeriodContainer from '../components/dropdowns/period/SelectPeriodContainer';
import Balance from '../components/readonly/Balance';
import { Card, Center, Align } from '../components/ui';
import WithHeading from '../components/enhancer/WithHeading';

export default function PresenterComponent() {
  return (
    <SplitView>
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
      <AccountInfo>
        <Center>
          <Align type="vertical">
            <Card>
              <WithHeading title={'Current Balance'}>
                <Balance />
              </WithHeading>
            </Card>
            <Card>
              <WithHeading title={'Money Flow'}>
                <Align>
                  <h2>+ $50.000</h2>
                  <span>Last week</span>
                </Align>
              </WithHeading>
            </Card>
            <Card>
              <WithHeading title={'Select Account'}>
                <SelectAccountContainer></SelectAccountContainer>
              </WithHeading>
            </Card>
            <Card>
              <WithHeading title={'Select Period'}>
                <SelectPeriodContainer />
              </WithHeading>
            </Card>
          </Align>
        </Center>
      </AccountInfo>
    </SplitView>
  );
}

const SplitView = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const AccountInfo = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

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
