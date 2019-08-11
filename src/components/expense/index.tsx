import React from 'react';
import styled from 'styled-components';
import Card from '../ui/Card';
import TagContainer from './tag/Container';
import CategoryContainer from './category/Container';
import AmountContainer from './amount/Container';
import AccountContainer from './account/Container';
import WithTitle from '../enhancer/WithTitle';
import {Button} from 'antd';
const Account = styled.div`
  width: 350px;
`;


export default function Presenter() {


  return (
    <Card>
      <Account>
        <WithTitle title={'Add new transaction'}>
        <hr/>
        </WithTitle>

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

        <Button type="primary">Submit</Button>
      </Account>
    </Card>
  );
}
