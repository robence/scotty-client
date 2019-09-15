import React from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components';
import { InputElementProps } from '../../../../types/form';

type PresenterProps = {
  username: InputElementProps;
  password: InputElementProps;
  email: InputElementProps;
  disabled: boolean;
  handleSubmit: () => void;
};

export default function CreateUserFormComponent({
  username,
  password,
  email,
  disabled,
  handleSubmit,
}: PresenterProps): JSX.Element {
  return (
    <Grid>
      <div>
        <div>
          <Input
            placeholder="email"
            value={email.value}
            onChange={email.onChange}
          />
        </div>
      </div>
      <div>
        <Input
          placeholder="username"
          value={username.value}
          onChange={username.onChange}
        />
      </div>
      <div>
        <Input.Password
          placeholder="password"
          value={password.value}
          onChange={password.onChange}
        />
      </div>

      <Button type="primary" disabled={disabled} onClick={handleSubmit}>
        Register
      </Button>
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px;
  grid-auto-rows: 50px;
  justify-content: center;
  gap: 1rem;
`;
