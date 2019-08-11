import React from 'react'
import styled from 'styled-components';
import {Radio, Input} from 'antd';
type ExpenseRadio = '-' | '+';

const Div = styled.div`
  
`;

const StyledInput = styled(Input)`
  margin-top: 1rem;
`;

type PresenterType = { 
  radio: ExpenseRadio;
  handleRadio: (e: any) => void;
}

export default function Presenter({ radio, handleRadio }: PresenterType) {
  return (
    <Div>
      <Radio.Group value={radio} onChange={handleRadio}>
        <Radio.Button value="-">Expense</Radio.Button>
        <Radio.Button value="+">Income</Radio.Button>
      </Radio.Group>
      <StyledInput placeholder="Enter amount"/>
    </Div>
    
  )
}
