import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store/initialState';
import { userStart } from '../store/user/actions';

export default function LoadInitialState(): JSX.Element {
  const { accountList, categories } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const boundUserStart = bindActionCreators(userStart, dispatch);

  useEffect(() => {
    const fetchUserData = async (): Promise<void> => {
      boundUserStart();
    };

    if (
      Object.values(categories).length &&
      !Object.values(accountList).length
    ) {
      fetchUserData();
    }
  }, [accountList, categories, boundUserStart]);

  return <></>;
}
