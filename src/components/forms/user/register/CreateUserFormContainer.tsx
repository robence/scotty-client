import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateTagFormComponent from './CreateUserFormComponent';
import * as userActionCreators from '../../../../store/user/actions';
import { useInput } from '../../hooks';

export default function CreateUserFormContainer(): JSX.Element {
  const dispatch = useDispatch();
  const boundActionCreators = bindActionCreators(userActionCreators, dispatch);

  const username = useInput();
  const password = useInput();
  const email = useInput();

  const disabled = false;

  const handleSubmit = (): void => {
    boundActionCreators.createUserStart({
      username: username.value,
      password: password.value,
      email: email.value,
    });
    // username.clear();
    // password.clear();
    // email.clear();
  };

  return (
    <CreateTagFormComponent
      email={email}
      username={username}
      password={password}
      disabled={disabled}
      handleSubmit={handleSubmit}
    />
  );
}
