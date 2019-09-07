import React from 'react';
import { Table } from 'antd';

type TableComponentProps = {
  columns: {
    title: string;
    dataIndex: string;
    key: string;
  }[];

  dataSource: { key: string; [props: string]: any | any[] }[];
};
/* eslint-disable-next-line */
export default function TableComponent({
  columns,
  dataSource,
}: TableComponentProps): JSX.Element {
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
