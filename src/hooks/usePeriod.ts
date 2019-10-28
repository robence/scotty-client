import useLang from './useLang';
import { PeriodList } from '../types/model';
import objectify from '../utils';
import { periods } from '../consts';

export default function usePeriod(): PeriodList {
  const text = useLang();

  const periodList: PeriodList = objectify([
    { _id: periods.DAY_IN_MINUTES.toString(), name: text.assets.period.day },
    { _id: periods.WEEK_IN_MINUTES.toString(), name: text.assets.period.week },
    {
      _id: periods.MONTH_IN_MINUTES.toString(),
      name: text.assets.period.month,
    },
    { _id: periods.YEAR_IN_MINUTES.toString(), name: text.assets.period.year },
    { _id: '-1', name: text.assets.period.full },
  ]);
  return periodList;
}
