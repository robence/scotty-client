import React from 'react';
import { ExpensePopulated } from '../../types/model';
import { Tag } from 'antd';
import styled from 'styled-components';

export default function Expense({
  item: { amount, category, tags },
}: {
  item: ExpensePopulated;
}) {
  return (
    <Inline>
      <h2>{amount}</h2>
      <h3>{category.name}</h3>
      <div>
        {tags.map(({name, id}) => (
          <Tag color="blue" key={id}>
            {name.toUpperCase()}
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
