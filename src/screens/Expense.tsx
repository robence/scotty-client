import React from 'react';
import styled from 'styled-components';
import Card from '../components/ui/Card';
import SelectTags from '../components/select/tag/SelectTagsContainer';
import SelectCategory from '../components/select/refactorable/category/SelectCategoryContainer';
import EnterAmount from '../components/input/amount/SelectAmountContainer';
import SelectAccount from '../components/select/refactorable/account/SelectAccountContainer';
import WithTitle from '../components/enhancer/WithTitle';
import WithHeading from '../components/enhancer/WithHeading';
import { Button } from 'antd';
import { spaces } from '../consts';
const Account = styled.div`
  display: flex;
  flex-direction: column;

  div + div,
  button {
    margin-top: ${spaces.m};
  }
`;

const StyledButton = styled(Button)`
  /* width: fit-content; */
  margin-top: ${spaces.s};
`;

export default function Presenter() {
  return (
    <Card>
      <WithHeading title={'Add new transaction'}>
        <Account>
          <WithTitle title={'Amount'}>
            <EnterAmount />
          </WithTitle>

          <WithTitle title={'Category'}>
            <SelectCategory />
          </WithTitle>

          <WithTitle title={'Tags'}>
            <SelectTags />
          </WithTitle>

          <WithTitle title={'Account'}>
            <SelectAccount />
          </WithTitle>

          <StyledButton type="primary">Submit</StyledButton>
        </Account>
      </WithHeading>
    </Card>
  );
}
