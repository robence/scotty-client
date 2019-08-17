import React from 'react';
import { Table, Tag } from 'antd';
import { DashboardType } from '../../types/model';

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
    render: (tagNames: string[]) => (
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
];

export default function Container({
  tags,
  expenses,
  categories,
}: DashboardType) {
  const dataSource: any[] = expenses.map(
    ({ id, amount, categoryId, tagIds }) => {
      const category = categories.find((c) => c.id === Number(categoryId));
      const tagNames = tagIds.map((tagId) => {
        const tag = tags.find((t) => t.id === tagId);
        return tag ? tag.name : '';
      });

      return {
        amount,
        key: id,
        category: category ? category.name : '',
        tags: tagNames,
      };
    },
  );

  return (
    <Table
      size="small"
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 240 }}
    />
  );
}
