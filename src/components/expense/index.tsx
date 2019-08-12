import React from 'react';
import styled from 'styled-components';
import Card from '../ui/Card';
import TagContainer from './tag/Container';
import CategoryContainer from './category/Container';
import AmountContainer from './amount/Container';
import AccountContainer from './account/Container';
import WithTitle from '../enhancer/WithTitle';
import WithHeading from '../enhancer/WithHeading';
import {Button} from 'antd';
const Account = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  width: fit-content;
  align-self: flex-end;
`;

export default function Presenter() {


  return (
    <Card>
      <Account>
        <WithHeading title={'Add new transaction'} />

        <WithTitle title={'Enter amount'}>
          <AmountContainer/>
        </WithTitle>

        <WithTitle title={'Select category'}>
          <CategoryContainer />
        </WithTitle>

        <WithTitle title={'Select tags'}>
          <TagContainer />
        </WithTitle>

        <WithTitle title={'Select account'}>
          <AccountContainer />
        </WithTitle>

        <StyledButton type="primary">Submit</StyledButton>
      </Account>
    </Card>
  );
}
