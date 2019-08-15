import React, { useState, useReducer, useEffect } from 'react';
import { message } from 'antd';
import Presenter from './CreateAndSelectAccountComponent';

const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
const CREATE_ACCOUNT = 'CREATE_ACCOUNT';

type State = {
  account: string;
  accountList: string[];
};

type Action =
  | { type: 'SELECT_ACCOUNT'; payload: string }
  | { type: 'CREATE_ACCOUNT'; payload: string };

const initialState = {
  account: '',
  accountList: ['Account 1', 'Savings', 'House'],
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case SELECT_ACCOUNT:
      return { ...state, account: action.payload };
    case CREATE_ACCOUNT:
      return {
        ...state,
        account: action.payload,
        accountList: [...state.accountList, action.payload],
      };
    default:
      return state;
  }
}

export default function AccountComponent() {
  const [{ account, accountList }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const [input, setInput] = useState('');
  const [loading] = useState(false);

  const accountExists = accountList.includes(input);
  const selectDisabled = input === account;

  useEffect(() => {
    if (account) {
      message.success(`${account} is now the default account.`, 1);
    }
  }, [account]);

  return (
    <Presenter
      input={input}
      loading={loading}
      accountExists={accountExists}
      dataSource={accountList}
      handleChange={(e) => setInput(e)}
      handleCreate={() => dispatch({ type: CREATE_ACCOUNT, payload: input })}
      handleSelect={() => dispatch({ type: SELECT_ACCOUNT, payload: input })}
      disabled={selectDisabled}
    />
  );
}
