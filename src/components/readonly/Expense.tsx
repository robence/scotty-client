import React from 'react';
import { ExpenseAsStringType } from '../../types/model';
import { Tag } from 'antd';
import styled from 'styled-components';

export default function Expense({
  item: { amount, categoryName, tagNames },
}: {
  item: ExpenseAsStringType;
}) {
  return (
    // TODO: make prettier
    <Inline>
      <h2>{amount}</h2>
      <h3>{categoryName}</h3>
      <div>
        {tagNames.map((tag, id) => (
          <Tag color="blue" key={id}>
            {tag.toUpperCase()}
          </Tag>
        ))}
      </div>
    </Inline>
  );
}

const Inline = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;
