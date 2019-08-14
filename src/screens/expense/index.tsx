import React from 'react';
import styled from 'styled-components';
import Card from '../../components/ui/Card';
import TagContainer from './tag/Container';
import CategoryContainer from './category/Container';
import AmountContainer from './amount/Container';
import AccountContainer from './account/Container';
import WithTitle from '../../components/enhancer/WithTitle';
import WithHeading from '../../components/enhancer/WithHeading';
import { Button } from 'antd';
import { spaces } from '../../consts';
const Account = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  width: fit-content;
  margin-top: ${spaces.s};
`;

export default function Presenter() {
  return (
    <Card>
      <WithHeading title={'Add new transaction'}>
        <Account>
          <WithTitle title={'Amount'}>
            <AmountContainer />
          </WithTitle>

          <WithTitle title={'Category'}>
            <CategoryContainer />
          </WithTitle>

          <WithTitle title={'Tags'}>
            <TagContainer />
          </WithTitle>

          <WithTitle title={'Account'}>
            <AccountContainer />
          </WithTitle>

          <StyledButton type="primary">Submit</StyledButton>
        </Account>
      </WithHeading>
    </Card>
  );
}
