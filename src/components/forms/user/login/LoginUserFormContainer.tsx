import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginUserFormComponent from './LoginUserFormComponent';
import * as userActionCreators from '../../../../store/user/actions';
import { useInput } from '../../hooks';
import { useLang } from '../../../../hooks';

export default function CreateUserFormContainer(): JSX.Element {
  const dispatch = useDispatch();
  const boundActionCreators = bindActionCreators(userActionCreators, dispatch);

  const username = useInput();
  const password = useInput();
  const text = useLang();

  const disabled = false;

  const handleSubmit = (): void => {
    boundActionCreators.loginUserStart({
      username: username.value,
      password: password.value,
    });
  };

  return (
    <LoginUserFormComponent
      username={username}
      password={password}
      disabled={disabled}
      handleSubmit={handleSubmit}
      text={text}
    />
  );
}
