import React, { SetStateAction, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd';
import SelectAccountComponent from './SelectAccountComponent';
import * as accountActionCreators from '../../../../store/account/actions';
import { State } from '../../../../store/initialState';

export default function CreateAndSelectAccountFormContainer() {
  const { selectedAccount, accountList } = useSelector(
    ({ selectedAccount, accountList }: State) => ({
      selectedAccount,
      accountList,
    }),
  );
  const dispatch = useDispatch();
  const { selectAccount } = bindActionCreators(accountActionCreators, dispatch);
  const handleAccountSelect = (id: SetStateAction<string>) =>
    selectAccount(accountList[Number(id)]);

  useEffect(() => {
    if (selectedAccount) {
      message.success(`${selectedAccount.name} is now the default account.`);
    }
  }, [selectedAccount]);

  const account = {
    options: Object.values(accountList),
    selected: selectedAccount.id,
    onChange: handleAccountSelect,
  };

  return <SelectAccountComponent account={account} />;
}
