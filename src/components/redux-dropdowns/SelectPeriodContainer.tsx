import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { SingleSelectComponent } from '../select';
import selectPeriod from '../../store/period/actions';
import { State } from '../../store/initialState';
import { FormElementProps } from '../../types/form';

export default function SelectPeriodContainer(): JSX.Element {
  const { selectedPeriod, periodList } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const boundSelectPeriod = bindActionCreators(selectPeriod, dispatch);
  const handlePeriodSelect = (id: string): void => {
    boundSelectPeriod(periodList[id]);
  };

  const period: FormElementProps = {
    options: Object.values(periodList),
    selected: selectedPeriod._id,
    onChange: handlePeriodSelect,
  };

  return <SingleSelectComponent props={period} />;
}
