import React from 'react';

import UserListContainer from './UserListContainer';

import CreateAccountButton from '../account/CreateAccountButton';

export default function UserLayout() {
  return (
    <div>
      <CreateAccountButton />
      <UserListContainer />
    </div>
  );
}
