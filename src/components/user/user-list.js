import React from 'react';

const displayUsers = (users) => {
  return users.map((user) => (
    <div key={user._id}>
      <li>
        {user.firstName}—{user.lastName}
      </li>
      <li>
        {user.username}—{user.email}
      </li>
    </div>
  ));
};

const UserList = ({ users }) => <ul>{displayUsers(users)}</ul>;

export default UserList;
