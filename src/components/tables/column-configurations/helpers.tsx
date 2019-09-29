import React from 'react';
import { Tag } from 'antd';

const createTags = (tagNames: string[]): JSX.Element[] =>
  tagNames.map((tag) => {
    let color = tag.length > 5 ? 'geekblue' : 'green';
    if (tag === 'loser') {
      color = 'volcano';
    }
    return (
      <Tag color={color} key={tag}>
        {tag.toUpperCase()}
      </Tag>
    );
  });

export const renderTags = (tagNames: string[]): JSX.Element => {
  return <span>{createTags(tagNames)}</span>;
};

export const renderTag = (tagName: string): JSX.Element => {
  return <span>{createTags([tagName])}</span>;
};
