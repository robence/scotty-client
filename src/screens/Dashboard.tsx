import React from 'react';
import { Tabs } from 'antd';
import {
  AllExpenses,
  ExpensesByCategory,
  ExpensesByTags,
} from '../components/tables';
import MoneyFlowSplineChart from '../components/charts';
import {
  SelectAccountContainer,
  SelectPeriodContainer,
} from '../components/redux-dropdowns';
import { Balance, MoneyFlow } from '../components/readonly';
import { Card, Center, Align } from '../components/ui';
import { WithHeading } from '../components/enhancer';
import { useLang } from '../hooks';

const { TabPane } = Tabs;

export default function PresenterComponent(): JSX.Element {
  const text = useLang();

  return (
    <Align content="evenly">
      <Tabs type="card">
        <TabPane tab={text.screens.dashboard.tabs.chart} key="1">
          <Card>
            <WithHeading title={text.screens.dashboard.tabs.chart}>
              <MoneyFlowSplineChart />
            </WithHeading>
          </Card>
        </TabPane>
        <TabPane tab={text.screens.dashboard.tabs.expense} key="2">
          <Card>
            <WithHeading title={text.screens.dashboard.tabs.expense}>
              <AllExpenses />
            </WithHeading>
          </Card>
        </TabPane>
        <TabPane tab={text.screens.dashboard.tabs.category} key="3">
          <Card>
            <WithHeading title={text.screens.dashboard.tabs.category}>
              <ExpensesByCategory />
            </WithHeading>
          </Card>
        </TabPane>
        <TabPane tab={text.screens.dashboard.tabs.tag} key="4">
          <Card>
            <WithHeading title={text.screens.dashboard.tabs.tag}>
              <ExpensesByTags />
            </WithHeading>
          </Card>
        </TabPane>
      </Tabs>
      <Center>
        <Align type="vertical">
          <Card>
            <WithHeading title={text.screens.dashboard.cards.balance}>
              <Balance />
            </WithHeading>
          </Card>
          <Card>
            <WithHeading title={text.screens.dashboard.cards.money}>
              <MoneyFlow />
            </WithHeading>
          </Card>
          <Card>
            <WithHeading title={text.screens.dashboard.cards.account}>
              <SelectAccountContainer />
            </WithHeading>
          </Card>
          <Card>
            <WithHeading title={text.screens.dashboard.cards.period}>
              <SelectPeriodContainer />
            </WithHeading>
          </Card>
        </Align>
      </Center>
    </Align>
  );
}
