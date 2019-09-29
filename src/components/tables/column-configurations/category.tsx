export default function getColumns(text: any): any {
  return [
    {
      title: text.components.tables.category,
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: text.components.tables.amount,
      dataIndex: 'amount',
      key: 'amount',
    },
  ];
}
