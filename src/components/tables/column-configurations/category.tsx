import { Lang } from '../../../hooks/useLang';
import { Column } from './helpers';

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
  ];
}
