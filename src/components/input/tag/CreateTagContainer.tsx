import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import Presenter from './CreateTagComponent';
import AsyncService from '../../../services/MockAsyncService';

const defaultDataSource = ['Gyros', 'Cinema', 'Shampoo'];

export default function CreateTagContainer() {
  const [tag, setTag] = useState('');
  const [dataSource, setDataSource] = useState(defaultDataSource);
  const [isLoading, setLoading] = useState(false);

  const tagExists = dataSource.includes(tag);
  const disabled = tagExists || tag === '';

  useEffect(() => {
    if (isLoading) {
      const createTag = async () => {
        await AsyncService(tag);
        setLoading(false);
        setDataSource([...dataSource, tag]);
        setTag('');
        message.success(`Tag ${tag} was successfully created.`);
      };

      createTag();
    }
    return () => undefined;
  }, [isLoading, dataSource, tag]);

  const handleSubmit = (e: any) => {
    setLoading(true);
  };
  const handleChange = (e: any) => setTag(e ? e.toString() : '');

  return (
    <Presenter
      tag={tag}
      loading={isLoading}
      tagExists={tagExists}
      disabled={disabled}
      dataSource={dataSource}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
}
