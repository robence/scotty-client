import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { SingleSelectComponent } from '../select';
import * as periodActionCreators from '../../store/period/actions';
import { State } from '../../store/initialState';
import { FormElementProps } from '../../types/form';

export default function SelectPeriodContainer() {
  const { selectedPeriod, periodList } = useSelector(
    ({ selectedPeriod, periodList }: State) => ({
      selectedPeriod,
      periodList,
    }),
  );
  const dispatch = useDispatch();
  const { selectPeriod } = bindActionCreators(periodActionCreators, dispatch);
  const handlePeriodSelect = (id: number) => {
    selectPeriod(periodList[id]);
  };

  const period: FormElementProps = {
    options: Object.values(periodList),
    selected: selectedPeriod.id,
    onChange: handlePeriodSelect,
  };

  return <SingleSelectComponent props={period} />;
}
