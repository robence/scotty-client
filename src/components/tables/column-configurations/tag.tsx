export default function getColumns(text: any): any {
  return [
    {
      title: text.components.tables.tags,
      dataIndex: 'tag',
      key: 'tag',
    },
    {
      title: text.components.tables.amount,
      dataIndex: 'amount',
      key: 'amount',
    },
  ];
}
