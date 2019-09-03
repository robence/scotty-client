import { Tag } from 'antd';
import React from 'react';

const columns = [
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Tags',
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
    title: 'Added',
    dataIndex: 'created',
    key: 'created',
  },
];

export default columns;
