import React from 'react';
import styled from 'styled-components';

export default function LogoComponent({ style, loader = 'Loader1' }: any) {
  const Logo = styled.img`
    animation: spin 2s linear infinite;

    @keyframes spin {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(359deg);
      }
    }
  `;

  //

  return <Logo style={style} src={`${loader}.png`} alt="logo" />;
}
