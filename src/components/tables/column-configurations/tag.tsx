import { renderTag } from './helpers';

export default function getColumns(text: any): any {
  return [
    {
      title: text.components.tables.tags,
      dataIndex: 'tag',
      key: 'tag',
      render: renderTag,
    },
    {
      title: text.components.tables.amount,
      dataIndex: 'amount',
      key: 'amount',
    },
  ];
}
