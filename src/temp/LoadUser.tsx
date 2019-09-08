import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store/initialState';
import { userStart } from '../store/user/actions';

export default function LoadInitialState(): JSX.Element {
  const { accountList } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const boundUserStart = bindActionCreators(userStart, dispatch);

  useEffect(() => {
    const fetch = async (): Promise<void> => {
      boundUserStart();
    };
    if (!Object.values(accountList).length) {
      fetch();
    }
  }, [accountList, boundUserStart]);

  return <></>;
}
