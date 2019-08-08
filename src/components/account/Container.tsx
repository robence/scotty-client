import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import Presenter from './Presenter';

const dataSource = ['Account 1', 'Savings', 'House'];

export default function AccountComponent() {
  const [account, setAccount] = useState('');
  const [loading, setLoading] = useState(false);

  const accountExists = dataSource.includes(account);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        message.success('New account was created successfully.');
        setLoading(false);
        setAccount('');
      }, 1234);

      return () => clearTimeout(timer);
    }
    return () => undefined;
  }, [loading]);

  const handleCreate = () => {
    setLoading(true);
  };
  const handleChange = (e: any) => setAccount(e ? e.toString() : '');

  return (
    <Presenter
      account={account}
      loading={loading}
      accountExists={accountExists}
      dataSource={dataSource}
      handleCreate={handleCreate}
      handleChange={handleChange}
      handleSelect={(e: any) => setAccount(e ? e.toString() : '')}
    />
  );
}
