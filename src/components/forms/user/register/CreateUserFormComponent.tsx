import React from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components';
import { InputElementProps } from '../../../../types/form';
import { Lang } from '../../../../hooks/useLang';

type PresenterProps = {
  username: InputElementProps;
  password: InputElementProps;
  email: InputElementProps;
  disabled: boolean;
  handleSubmit: () => void;
  text: Lang;
};

export default function CreateUserFormComponent({
  username,
  password,
  email,
  disabled,
  handleSubmit,
  text,
}: PresenterProps): JSX.Element {
  return (
    <Grid>
      <div>
        <div>
          <Input
            placeholder={text.components.forms.register.email}
            value={email.value}
            onChange={email.onChange}
          />
        </div>
      </div>
      <div>
        <Input
          placeholder={text.components.forms.register.username}
          value={username.value}
          onChange={username.onChange}
        />
      </div>
      <div>
        <Input.Password
          placeholder={text.components.forms.register.password}
          value={password.value}
          onChange={password.onChange}
        />
      </div>

      <Button type="primary" disabled={disabled} onClick={handleSubmit}>
        {text.components.forms.register.submit}
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
