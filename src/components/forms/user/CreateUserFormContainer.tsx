import React, { ChangeEvent, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SelectValue } from 'antd/lib/select';
import { message } from 'antd';
import CreateTagFormComponent from './CreateUserFormComponent';
import { State } from '../../../store/initialState';
import { createTagStart } from '../../../store/tag/actions';
import { useInput } from '../hooks';

export default function CreateUserFormContainer(): JSX.Element {
  // const dispatch = useDispatch();
  // const boundCreateTag = bindActionCreators(createTagStart, dispatch);

  const username = useInput();
  const password = useInput();
  const email = useInput();

  const disabled = false;

  const handleSubmit = (): void => {
    // boundCreateTag({ userId, name: input });
    message.info('success');
    username.clear();
    password.clear();
    email.clear();
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
