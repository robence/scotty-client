import React from 'react';

import UserListContainer from "./user/user-list-container";

export default function () {

  const styles = {
      backgroundColor: '#e53a06',
      gridArea: 'content'
    };

  return (
    <div style={styles}>
      Hello
      <UserListContainer />
    </div>
  );
}
