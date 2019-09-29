import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, Dropdown, message } from 'antd';
import styled from 'styled-components';

import selectLangAction from '../../store/lang/actions';

export default function SelectPeriodContainer(): JSX.Element {
  const { lang } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const selectLang = bindActionCreators(selectLangAction, dispatch);

  const menu = (
    <Menu onClick={({ key }: any) => selectLang(key)}>
      <Menu.Item key="hu">
        <span>
          <Img src="flag-hu.png" alt="Hungarian flag" />
          HU
        </span>
      </Menu.Item>
      <Menu.Item key="en">
        <span>
          <Img src="flag-en.png" alt="English flag" />
          ENG
        </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Div>
      <Dropdown overlay={menu}>
        <Img
          src={`flag-${lang}.png`}
          alt="Current language flag"
          maxSize="30px"
        />
      </Dropdown>
    </Div>
  );
}

type ImgProps = {
  maxSize?: string;
};

const Img = styled.img`
  width: 100%;
  height: 100%;
  max-width: ${({ maxSize }: ImgProps): string => maxSize || '20px'};
  max-height: ${({ maxSize }: ImgProps): string => maxSize || '20px'};
`;

const Div = styled.div`
  padding-right: 2rem;
`;
