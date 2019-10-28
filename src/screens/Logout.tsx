import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../store/initialState';
import * as userActionCreators from '../store/user/actions';

export default function Register(): JSX.Element {
  const { token } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const boundActionCreators = bindActionCreators(userActionCreators, dispatch);

  useEffect(() => {
    if (token) {
      localStorage.removeItem('scottyUserToken');
      boundActionCreators.removeTokenStart();
    }
  }, [token, boundActionCreators]);

  return <></>;
}
