import { renderTags, Column } from './helpers';
import { Lang } from '../../../hooks/useLang';

export default function getColumns(text: Lang): Column[] {
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
    {
      title: text.components.tables.tags,
      dataIndex: 'tags',
      key: 'tags',
      render: renderTags,
    },
    {
      title: text.components.tables.created,
      dataIndex: 'created',
      key: 'created',
    },
  ];
}
