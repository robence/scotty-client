import React from 'react';
import { Table } from 'antd';

type TableComponentProps = {
  columns: {
    title: string;
    dataIndex: string;
    key: string;
  }[];

  dataSource: any[];
};

export default function TableComponent({
  columns,
  dataSource,
}: TableComponentProps) {
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
