import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { SingleSelectComponent } from '../select';
import * as accountActionCreators from '../../store/account/actions';
import { State } from '../../store/initialState';
import { FormElementProps } from '../../types/form';

export default function SelectAccountContainer(): JSX.Element {
  const { selectedAccount, accountList } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const boundActionCreators = bindActionCreators(
    accountActionCreators,
    dispatch,
  );

  const handleAccountSelect = (id: string): void => {
    const account = accountList[id];
    if (!account || !account._id) return;
    boundActionCreators.selectAccountStart(account);
  };

  const account: FormElementProps = {
    options: Object.values(accountList),
    selected: selectedAccount._id,
    onChange: handleAccountSelect,
  };

  return <SingleSelectComponent props={account} />;
}
