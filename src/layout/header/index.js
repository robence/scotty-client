import React from 'react';
import Button from '../../components/header/Button';

export const Left = () => <div>Logo</div>;
export const Right = () => {
  const styles = {
    display: 'flex',
    alignItems: 'center',
  };
  return (
    <div style={styles}>
      <Button title={'Icon Profile'} />
      <Button title={'Dashboard'} />
      <Button title={'Create'} />
      <div>Icon 1</div>
      <div>Icon 2</div>
      <div>Icon 3</div>
      <div>Icon 4</div>
    </div>
  );
};
