import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { SingleSelectComponent } from '../select';
import selectPeriod from '../../store/period/actions';
import { State } from '../../store/initialState';
import { FormElementProps } from '../../types/form';
import { usePeriod } from '../../hooks';

export default function SelectPeriodContainer(): JSX.Element {
  const { selectedPeriodId } = useSelector((state: State) => state);
  const periodList = usePeriod();
  const dispatch = useDispatch();
  const boundSelectPeriod = bindActionCreators(selectPeriod, dispatch);
  const handlePeriodSelect = (id: string): void => {
    boundSelectPeriod(id);
  };

  const period: FormElementProps = {
    options: Object.values(periodList),
    selected: selectedPeriodId.toString(),
    onChange: handlePeriodSelect,
  };

  return <SingleSelectComponent props={period} />;
}
