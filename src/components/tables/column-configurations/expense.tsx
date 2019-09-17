import { Tag } from 'antd';
import React from 'react';
import text from '../../../i18n';

const columns = [
  {
    title: text.components.tables.category,
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: text.components.tables.amount,
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: text.components.tables.tags,
    dataIndex: 'tags',
    key: 'tags',
    /* eslint-disable-next-line react/display-name */
    render: (tagNames: string[]): JSX.Element => (
      <span>
        {tagNames.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: text.components.tables.created,
    dataIndex: 'created',
    key: 'created',
  },
];

export default columns;
