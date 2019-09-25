import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store/initialState';
import * as userActionCreators from '../store/user/actions';

export default function TokenHandler(): JSX.Element {
  const { token } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const boundActionCreators = bindActionCreators(userActionCreators, dispatch);

  useEffect(() => {
    if (!token) {
      const tokenFromStorage = localStorage.getItem('scottyUserToken');
      if (tokenFromStorage) {
        boundActionCreators.selectTokenStart({ token: tokenFromStorage });
      }
    } else {
      const tokenFromStorage = localStorage.getItem('scottyUserToken');
      if (!tokenFromStorage) {
        localStorage.setItem('scottyUserToken', token);
      }
    }
  }, [token]);

  return <></>;
}
