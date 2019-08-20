import React, { SetStateAction } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import SelectPeriodComponent from './SelectPeriodComponent';
import * as periodActionCreators from '../../../store/period/actions';
import { State } from '../../../store/initialState';

export default function SelectAccountContainer() {
  const { selectedPeriod, periodList } = useSelector(
    ({ selectedPeriod, periodList }: State) => ({
      selectedPeriod,
      periodList,
    }),
  );
  const dispatch = useDispatch();
  const { selectPeriod } = bindActionCreators(periodActionCreators, dispatch);
  const handlePeriodSelect = (id: SetStateAction<string>) =>
    selectPeriod(periodList[Number(id)]);

  const period = {
    options: Object.values(periodList),
    selected: selectedPeriod.id,
    onChange: handlePeriodSelect,
  };

  return <SelectPeriodComponent period={period} />;
}
