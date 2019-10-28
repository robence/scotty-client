import { renderTag, Column } from './helpers';
import { Lang } from '../../../hooks/useLang';

export default function getColumns(text: Lang): Column[] {
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
