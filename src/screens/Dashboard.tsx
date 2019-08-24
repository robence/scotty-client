import React from 'react';
import AllExpenses from '../components/tables/ExpenseTableContainer';
import ExpensesByCategory from '../components/tables/CategoryTableContainer';
import ExpensesByTags from '../components/tables/TagTableContainer';
import SelectAccountContainer from '../components/standalone-dropdowns/SelectAccountContainer';
import SelectPeriodContainer from '../components/standalone-dropdowns/SelectPeriodContainer';
import Balance from '../components/readonly/Balance';
import MoneyFlow from '../components/readonly/MoneyFlow';
import { Card, Center, Align } from '../components/ui';
import WithHeading from '../components/enhancer/WithHeading';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default function PresenterComponent() {
  return (
    <Align content="evenly">
      <Tabs type="card">
        <TabPane tab="All Expenses" key="1">
          <Card>
            <WithHeading title={'All Expenses'}>
              <AllExpenses />
            </WithHeading>
          </Card>
        </TabPane>
        <TabPane tab="Expenses by Categories" key="2">
          <Card>
            <WithHeading title={'Expenses by Categories'}>
              <ExpensesByCategory />
            </WithHeading>
          </Card>
        </TabPane>
        <TabPane tab="Expenses by Tags" key="3">
          <Card>
            <WithHeading title={'Expenses by Tags'}>
              <ExpensesByTags />
            </WithHeading>
          </Card>
        </TabPane>
      </Tabs>
      <Center>
        <Align type="vertical">
          <Card>
            <WithHeading title={'Current Balance'}>
              <Balance />
            </WithHeading>
          </Card>
          <Card>
            <WithHeading title={'Money Flow'}>
              <MoneyFlow />
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
    </Align>
  );
}