import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import { SelectValue } from 'antd/lib/select';
import Presenter from './Presenter';

const dataSource = ['Gyros', 'Cinema', 'Shampoo'];
export default function TagComponent() {
  const [tag, setTag] = useState('');
  const [loading, setLoading] = useState(false);

  const tagExists = dataSource.includes(tag);
  const disabled = tagExists || tag === '';

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        message.success('New tag was created successfully.');
        setLoading(false);
        setTag('');
      }, 1234);

      return () => clearTimeout(timer);
    }
    return () => undefined;
  }, [loading]);

  const handleSubmit = () => {
    setLoading(true);
  };
  const handleChange = (e: SelectValue) => setTag(e ? e.toString() : '');

  return (
    <Presenter
      tag={tag}
      loading={loading}
      tagExists={tagExists}
      disabled={disabled}
      dataSource={dataSource}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
}
