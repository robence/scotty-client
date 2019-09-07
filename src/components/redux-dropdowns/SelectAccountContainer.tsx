import React, { SetStateAction, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd';
import { SingleSelectComponent } from '../select';
import * as accountActionCreators from '../../store/account/actions';
import { State } from '../../store/initialState';
import { FormElementProps } from '../../types/form';

export default function SelectAccountContainer(): JSX.Element {
  const { selectedAccount, accountList } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const { selectAccount } = bindActionCreators(accountActionCreators, dispatch);
  const handleAccountSelect = (id: SetStateAction<string>): void => {
    selectAccount(accountList[Number(id)]);
  };

  useEffect(() => {
    if (selectedAccount) {
      message.info(`${selectedAccount.name} is now the default account.`);
    }
  }, [selectedAccount]);

  const account: FormElementProps = {
    options: Object.values(accountList),
    selected: selectedAccount._id,
    onChange: handleAccountSelect,
  };

  return <SingleSelectComponent props={account} />;
}
