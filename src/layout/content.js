import React from 'react';

// import UserLayout from "../components/user/user-layout";
import CreateExpenseLayout from './CreateExpenseLayout';

export default function() {
  const styles = {
    gridArea: 'content',
  };

  return (
    <div style={styles}>
      <CreateExpenseLayout />
    </div>
  );
}
