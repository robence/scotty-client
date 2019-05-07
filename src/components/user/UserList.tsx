import React from 'react';

const displayUsers = (users: any) =>
  users.map((user: any) => (
    <div key={user.id}>
      <li>
        {user.firstName}—{user.lastName}
      </li>
      <li>
        {user.username}—{user.email}
      </li>
    </div>
  ));

export default function UserList({ users }: any) {
  return <ul>{displayUsers(users)}</ul>;
}
