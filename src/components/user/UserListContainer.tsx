import React from 'react';

import UserList from './UserList';

export default function UserListContainer() {
  const data = [
    {
      id: '1',
      username: 'user1',
      firstName: 'first',
      lastName: 'last',
      email: 'example@dot.com',
    },
    {
      id: '1',
      username: 'user1',
      firstName: 'first',
      lastName: 'last',
      email: 'example@dot.com',
    },
    {
      id: '1',
      username: 'user1',
      firstName: 'first',
      lastName: 'last',
      email: 'example@dot.com',
    },
    {
      id: '1',
      username: 'user1',
      firstName: 'first',
      lastName: 'last',
      email: 'example@dot.com',
    },
  ];

  return <UserList users={data} />;
}
